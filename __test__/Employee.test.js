const Employee = require("../lib/Employee");

const employee = new Employee("empTest", "1", "test@employee.com");

test("Employee can be added", () => {
    expect(employee.name).toBe("empTest");
    expect(employee.id).toBe("1");
    expect(employee.email).toBe("test@employee.com");
});

test("Validate all lib/Employee.js methods", () => {
    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getRole()).toBe("Employee");
});