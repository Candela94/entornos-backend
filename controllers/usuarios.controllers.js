export const createUsuario = async (req, res, next) => {


    const { nombre, email } = req.body;


    try {

        const nuevoUsuario = await Usuario.create({ nombre, email });
        responseAPI.data = nuevoUsuario;
        responseAPI.msg = `Alumno con nombre ${nombre} y con email ${email} ha sido creado con éxito`
        responseAPI.status = 'ok';

        res.status(200).json(responseAPI)

    } catch (e) {
        console.error("tuvimos un error ", e)
        next(e)
    }

}