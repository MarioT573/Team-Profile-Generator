const {Manager} = require("../lib/Manager");

const manager = new Manager("manTest", "4", "test@manager.com", '1');

test("Creates a new Manager", () => {
    expect(manager.name).toBe("manTest");
    expect(manager.id).toBe("4");
    expect(manager.email).toBe("test@manager.com");
    expect(manager.officeNumber).toBe("1");
});

test("Checks all Manager methods", () => {
    expect(manager.getName()).toBe(manager.name);
    expect(manager.getId()).toBe(manager.id);
    expect(manager.getEmail()).toBe(manager.email);
    expect(manager.getOfficeNumber()).toBe(manager.officeNumber);
    expect(manager.getRole()).toBe("Manager");
});