class EmployeePayroll {
    get id() { return this._id }
    set id(id) {
        this._id = id;
    }

    get name() { return this._name; }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z]{2,}$');
        if (nameRegex.test(name))
            this._name = name;
        else throw 'Name is Incorrect!';
    }

    get profileImg() { return this._profileImg; }
    set profileImg(profileImg) {
        this._profileImg = profileImg;
    }

    get gender() { return this._gender; }
    set gender(gender) {
        this._gender = gender;
    }

    get department() { return this._department; }
    set department(department) {
        this._department = department;
    }

    get salary() { return this._salary; }
    set salary(salary) {
        this._salary = salary;
    }

    get startDate() { return this._startDate; }
    set startDate(startDate) {
        let now = new Date();
        if (startDate <= new Date())
            this._startDate = startDate;
        else throw 'Date is Incorrect!';
    }

    get note() { return this._note; }
    set note(note) {
        this._note = note;
    }

    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const date = this.startDate === undefined ? "undefined" : this.startDate.toLocaleDateString("en-US", options);
        return "name = " + this.name +
            "\n gender = " + this.gender +
            "\n profile = " + this.profileImg +
            "\n department = " + this.department +
            "\n salary = " + this.salary +
            "\n startDate = " + date +
            "\n note = " + this.note;
    }
}