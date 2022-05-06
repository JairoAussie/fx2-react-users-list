class User {
    constructor(id, first, last, email, phone, city){
        this.id = id;
        this.first =first;
        this.last = last;
        this.email = email;
        this.phone = phone;
        this.city = city;
    }

    fullName(){
        return `${this.first} ${this.last}`
    }

    contactDetails(){
        return `email: ${this.email}, phone: ${this.phone}`
    }

}

export default User

// const user1 = new User("Jairo", "Bilbao", "jairo.bilbao@email.com", "0444111222", "Brisbane")
// user1.fullName()
// user1.contactDetails()
// user1.city
