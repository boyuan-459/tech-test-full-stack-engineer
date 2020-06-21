import { Model, BuildOptions } from 'sequelize'

interface MyModel extends Model {
    readonly id: number;
}

type ModelStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): MyModel;
}

export default ModelStatic
