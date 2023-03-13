class UserRepositoryInMemory {
  users = []

  async create({ name, email, password, isAdmin}) {
    const user = {
      id: Math.floor(Math.random() * 1000) + 1,
      name,
      email,
      password,
      isAdmin
    }

    this.users.push(user)

    return user
  }

  async findByEmail(email) {
    return this.users.find(user => user.email === email)
  }
}

module.exports = UserRepositoryInMemory