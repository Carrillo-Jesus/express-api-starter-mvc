const BlogModel = require("@/models/BlogModel");

//obtener todos los blogs
exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = await BlogModel.findAll();
        return res.status(200).json(blogs);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

//mostrar un blog
exports.getBlogById = async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await BlogModel.findOne({
            where: {
                id: id
            }
        });
        if (blog) {
            return res.status(200).json(blog);
        }
        return res.status(404).json({ error: "Blog not found" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

//crear un blog
exports.createBlog = async (req, res) => {
    try {
        await BlogModel.create(req.body);
        return res.status(201).json({message: "Blog created"});
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

//actualizar un blog
exports.updateBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await BlogModel.update(req.body, {
            where: { id: id }
        });
        if (updated) {
            return res.status(200).json({ message: "Blog updated" });
        }
        throw new Error("Blog not found");
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

//eliminar un blog
exports.deleteBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await BlogModel.destroy({
            where: { id: id }
        });
        if (deleted) {
            return res.status(204).json({ message: "Blog deleted" });
        }
        throw new Error("Blog not found");
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

