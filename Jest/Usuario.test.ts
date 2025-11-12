import { User } from "./Usuario";

describe("User Class", () => {
  let usuario: User;

  beforeEach(() => {
    usuario = new User("alvaro", 34, "alvaro@gmail.com", true);
  });

  test("debe regresar el nombre correcto", () => {
    expect(usuario.getname()).toBe("alvaro");
  });

  test("debe regresar un profile correcto", () => {
    const profile = "Hola alvaro, usted tiene 34 año y si es desarrollador";
    expect(usuario.getProfile()).toBe(profile);
  });

  test("debe regresar el estado correcto", () => {
    expect(usuario.isState()).toBe(true);
  });

  test("debe retornar el correo correcto", () => {
    expect(usuario.getemail()).toBe("alvaro@gmail.com");
  });
});
