import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
    try {
        //getting message from user
        const {message} = req.body;
        //getting recieverId from url parmaters
        const {id:receiverId} = req.params;
        //getting senderId from logged in user
        const senderId = req.user._id;

        //find all messages between senderId and receiverId
        let conversation = await Conversation.findOne({
            participants: {
                $all: [senderId, receiverId]
            },
        })

        //if conversation not found, create new conversation
        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId]
            })
        }

        //create new Message object
        const newMessage = new Message({
            senderId,
            receiverId,
            message
        })

        //add new message to conversation
        if(newMessage) {
            conversation.messages.push(newMessage._id);
        }

        //SOCKET IO functionality will go here

        //save conversation and message to database
        // await conversation.save();
        // await newMessage.save();
        //we can do the database save paralelly by doing the following
        await Promise.all([conversation.save(), newMessage.save()]);

        res.status(201).json(newMessage);

    } catch (error) {
        console.log("Error in sendMessage controller!", error.message);
        res.status(500).json({ error: "Internal Server Error!" });
    }
}

export const getMessages = async (req, res) => {
    try {
        const {id:userToChatId} = req.params;
        //it's coming from middleware the req.user is set there
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: {
                $all: [senderId, userToChatId]
            },
        }).populate("messages");
        //first conversation is fetched, then we populate it with messages
        //populate is used to fetch data from other collections

        //if conversation not found
        if(!conversation) {
            return res.status(200).json([]);  
        }

        const messages = conversation.messages;

        res.status(200).json(messages);

    } catch (error) {
        console.log("Error in getMessage controller!", error.message);
        res.status(500).json({ error: "Internal Server Error!" });
    }
}