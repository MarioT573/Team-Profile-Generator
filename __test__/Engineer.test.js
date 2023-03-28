const {Engineer} = require('../lib/Engineer');

const engineer = new Engineer("engTest", "2", "test@engineer.com", "engineer123");

test("Engineer can be added", () => {
    expect(engineer.name).toBe("engTest");
    expect(engineer.id).toBe("2");
    expect(engineer.email).toBe("test@engineer.com");
    expect(engineer.github).toBe("engineer123");
});

test('Validate all lib/Engineer.js methods', () => {
    expect(engineer.getName()).toBe(engineer.name);
    expect(engineer.getId()).toBe(engineer.id);
    expect(engineer.getEmail()).toBe(engineer.email);
    expect(engineer.getGithub()).toBe(engineer.github);
    expect(engineer.getRole()).toBe("Engineer");
});