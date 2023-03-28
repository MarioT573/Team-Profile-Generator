const {Intern} = require('../lib/Intern');

const intern = new Intern("intTest", "3", "test@intern.com", "University of Toronto");

test('Creates a new Intern', () => {
    expect(intern.name).toBe("intTest");
    expect(intern.id).toBe("3");
    expect(intern.email).toBe("test@intern.com");
    expect(intern.school).toBe("University of Toronto");
});

test('Checks all Intern methods', () => {
    expect(intern.getName()).toBe(intern.name);
    expect(intern.getId()).toBe(intern.id);
    expect(intern.getEmail()).toBe(intern.email);
    expect(intern.getSchool()).toBe(intern.school);
    expect(intern.getRole()).toBe("Intern");
});