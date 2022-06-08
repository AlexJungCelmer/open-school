import axios from 'axios'
/**
 * This class deals with the School micro-service
 */

class SchoolService {
  /**
   * Recives an school object and POST.
   * @param {Object} school
   */
  async registerSchool (school) {
    return axios.post('/api/school/register', school)
  }
}

export default SchoolService
