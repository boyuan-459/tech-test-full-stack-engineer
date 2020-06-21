import Suburb from './Suburb'
import Category from './Category'
import Job from './Job'

Job.hasOne(Suburb, { as: 'suburb', foreignKey: 'id', sourceKey: 'suburb_id' })
Job.hasOne(Category, { as: 'category', foreignKey: 'id', sourceKey: 'category_id' })

export {
    Job,
    Suburb,
    Category,
}
