const User = require("../models/User");

module.exports = {
    
    async createUser(req, res){
        try{
            const { name, email, cellphone } = req.body;
            const user = await User.create({name, email, cellphone});

            if(!user){
               return res.status(400).json({message: "User not created!"})
            }

            return res.status(201).json(user);
        }catch(err){
            return res.status(500).json({"message": `Error creating user: ${err}`})
        }
    },

    async getAllUsers(req, res){

        try{
            const users = await User.find();

            if(!users){
                return res.status(404).json({message: "Users not found!"})
            }

            return res.status(200).json(users);
        }catch(err){
            return res.status(500).json({"message": `Error getting users: ${err}`})
        }
    },

    async getUserById(req, res){

        try{
            const { id } = req.params;

            const user = await User.findById(id);

            if(!user){
                return res.status(404).json({message: "User not found!"})
            }

            return res.status(200).json({user});
        }catch(err){
            return res.status(500).json({"message": `Error getting user: ${err}`})
        }
    },

    async updateUser(req, res){
        try{
            const { id } = req.params;
            const { name, email, cellphone } = req.body;
            
            const user = await User.findByIdAndUpdate(
                id,
                { name, email, cellphone },
                { new: true } //return user updated
            );

            if(!user){
                return res.status(404).json({message: "User not found!"})
            }

            return res.status(200).json({
                message: "User updated successfully!",
                user: user
            });
        } catch(err) {
            return res.status(500).json({message: `Error updating user: ${err}`});
        }
    },

    async deleteUser(req, res){

        try{
            const { id } = req.params;
            const user = await User.findByIdAndDelete(id);

            if(!user){
                return res.status(404).json({message: "User not found!"})
            }
            return res.status(204).json({message: "User deleted successfully!"});
        }catch(err){
            return res.status(500).json({"message": `Error deleting user: ${err}`})
        }
    }
}