import { test, expect } from "@playwright/test";

test.describe("Routing e idioma", () => {
  test("la raíz redirige a un locale", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveURL(/\/(es|en)$/);
  });

  test("el selector cambia de idioma y de URL", async ({ page }) => {
    await page.goto("/es");
    const toEnglish = page.getByRole("link", { name: "Switch to English" });
    await expect(toEnglish).toBeVisible();

    await toEnglish.click();
    await expect(page).toHaveURL(/\/en$/);
    await expect(
      page.getByRole("link", { name: "Cambiar a español" }),
    ).toBeVisible();
  });
});

test.describe("Contenido por idioma", () => {
  test("las secciones y proyectos renderizan en español", async ({ page }) => {
    await page.goto("/es");
    await expect(
      page.getByRole("heading", { name: "Proyectos destacados" }),
    ).toBeVisible();
    await expect(page.getByText("TrustRide").first()).toBeVisible();
    await expect(page.getByText("2Mmudanzas").first()).toBeVisible();
    await expect(page.getByText("RCP Fundación UDEC").first()).toBeVisible();
  });

  test("el título de proyectos está traducido en inglés", async ({ page }) => {
    await page.goto("/en");
    await expect(
      page.getByRole("heading", { name: "Featured projects" }),
    ).toBeVisible();
  });
});

test.describe("Posicionamiento", () => {
  const casos = [
    {
      idioma: "español",
      path: "/es",
      rol: "Full Stack Developer | Coordinación Técnica de Proyectos IT",
      area: "Coordinación de proyectos",
      ubicacion: "La Plata, Argentina · Remoto, híbrido en CABA o reubicación",
    },
    {
      idioma: "inglés",
      path: "/en",
      rol: "Full Stack Developer | IT Technical Project Coordination",
      area: "Project coordination",
      ubicacion:
        "La Plata, Argentina · Remote, hybrid in Buenos Aires (CABA) or relocation",
    },
  ];

  for (const { idioma, path, rol, area, ubicacion } of casos) {
    test(`el Hero muestra desarrollo + coordinación técnica en ${idioma}`, async ({
      page,
    }) => {
      await page.goto(path);
      await expect(page.locator("#hero").getByText(rol)).toBeVisible();
    });

    test(`las áreas de contribución incluyen coordinación en ${idioma}`, async ({
      page,
    }) => {
      await page.goto(path);
      await expect(
        page
          .locator("#about")
          .getByRole("listitem")
          .filter({ hasText: new RegExp(`^${area}$`) }),
      ).toBeVisible();
    });

    test(`la ubicación indica La Plata e híbrido en CABA en ${idioma}`, async ({
      page,
    }) => {
      await page.goto(path);
      await expect(page.locator("#hero").getByText(ubicacion)).toBeVisible();
    });
  }
});

test.describe("Cómo gestiono los proyectos", () => {
  const casos = [
    {
      idioma: "español",
      path: "/es",
      titulo: "Cómo gestiono los proyectos",
      link: "Coordinación",
      abrirMenu: "Abrir menú",
      bloques: [
        "Planificación y seguimiento",
        "Herramientas y metodologías",
        "Costos, riesgos y alcance",
        "Documentación y comunicación",
      ],
    },
    {
      idioma: "inglés",
      path: "/en",
      titulo: "How I manage projects",
      link: "Coordination",
      abrirMenu: "Open menu",
      bloques: [
        "Planning & tracking",
        "Tools & methods",
        "Costs, risks & scope",
        "Documentation & communication",
      ],
    },
  ];

  for (const { idioma, path, titulo, link, abrirMenu, bloques } of casos) {
    test(`la sección se muestra en ${idioma}`, async ({ page }) => {
      await page.goto(path);
      await expect(
        page
          .locator("#coordination")
          .getByRole("heading", { level: 2, name: titulo }),
      ).toBeVisible();
    });

    test(`muestra los cuatro bloques de gestión en ${idioma}`, async ({
      page,
    }) => {
      await page.goto(path);
      const seccion = page.locator("#coordination");
      for (const bloque of bloques) {
        await expect(
          seccion.getByRole("heading", { level: 3, name: bloque }),
        ).toBeVisible();
      }
    });

    test(`el navbar enlaza a la sección en ${idioma}`, async ({ page }) => {
      await page.goto(path);
      await expect(
        page.getByRole("link", { name: link, exact: true }),
      ).toHaveAttribute("href", "#coordination");
    });

    test.describe("mobile", () => {
      test.use({ viewport: { width: 375, height: 720 } });

      test(`el menú mobile enlaza a la sección en ${idioma}`, async ({
        page,
      }) => {
        await page.goto(path);
        await page.getByRole("button", { name: abrirMenu }).click();
        await expect(
          page.getByRole("link", { name: link, exact: true }),
        ).toHaveAttribute("href", "#coordination");
      });
    });
  }
});

test.describe("Caso 2Mmudanzas", () => {
  const casos = [
    {
      idioma: "español",
      path: "/es",
      etiquetas: ["Problema de negocio", "Mi intervención", "Resultado"],
    },
    {
      idioma: "inglés",
      path: "/en",
      etiquetas: ["Business problem", "My contribution", "Outcome"],
    },
  ];

  for (const { idioma, path, etiquetas } of casos) {
    test(`la tarjeta muestra problema, intervención y resultado en ${idioma}`, async ({
      page,
    }) => {
      await page.goto(path);
      const tarjeta = page
        .getByRole("article")
        .filter({ has: page.getByRole("heading", { name: "2Mmudanzas" }) });
      for (const etiqueta of etiquetas) {
        await expect(
          tarjeta.getByText(etiqueta, { exact: true }),
        ).toBeVisible();
      }
    });
  }
});

test.describe("Coordinación con stakeholders en proyectos", () => {
  const casos = [
    {
      idioma: "español",
      path: "/es",
      validacion: /validados por la dirección de la Fundación/,
    },
    {
      idioma: "inglés",
      path: "/en",
      validacion: /validated by the Foundation's leadership/,
    },
  ];

  for (const { idioma, path, validacion } of casos) {
    test(`RCP aclara que la dirección de la Fundación validó los contenidos en ${idioma}`, async ({
      page,
    }) => {
      await page.goto(path);
      const tarjeta = page.getByRole("article").filter({
        has: page.getByRole("heading", { name: "RCP Fundación UDEC" }),
      });
      await expect(tarjeta.getByText(validacion)).toBeVisible();
    });
  }
});

test.describe("Formación académica", () => {
  const casos = [
    {
      idioma: "español",
      path: "/es",
      titulo: "Formación",
      carrera: "Ingeniería en Sistemas de Información",
    },
    {
      idioma: "inglés",
      path: "/en",
      titulo: "Education",
      carrera: "Information Systems Engineering",
    },
  ];

  for (const { idioma, path, titulo, carrera } of casos) {
    test(`"Sobre mí" muestra la carrera en la UTN en ${idioma}`, async ({
      page,
    }) => {
      await page.goto(path);
      const about = page.locator("#about");
      await expect(
        about.getByRole("heading", { level: 3, name: titulo }),
      ).toBeVisible();
      await expect(about.getByText(carrera)).toBeVisible();
      await expect(about.getByText(/UTN/)).toBeVisible();
    });
  }
});

test.describe("Herramientas de coordinación en el Stack", () => {
  const casos = [
    { idioma: "español", path: "/es", grupo: "Coordinación & colaboración" },
    { idioma: "inglés", path: "/en", grupo: "Coordination & collaboration" },
  ];

  for (const { idioma, path, grupo } of casos) {
    test(`el Stack incluye el grupo de coordinación con Asana en ${idioma}`, async ({
      page,
    }) => {
      await page.goto(path);
      const skills = page.locator("#skills");
      await expect(
        skills.getByRole("heading", { level: 3, name: grupo }),
      ).toBeVisible();
      await expect(
        skills.getByRole("listitem").filter({ hasText: /^Asana$/ }),
      ).toBeVisible();
    });
  }
});

test.describe("Experiencia en Luz Consulting", () => {
  const casos = [
    {
      idioma: "español",
      path: "/es",
      bloques: [
        "Desarrollo e implementación técnica",
        "Coordinación y gestión de proyectos",
        "Comunicación y análisis de negocio",
      ],
    },
    {
      idioma: "inglés",
      path: "/en",
      bloques: [
        "Development & technical implementation",
        "Project coordination & management",
        "Communication & business analysis",
      ],
    },
  ];

  for (const { idioma, path, bloques } of casos) {
    test(`separa los logros en tres bloques en ${idioma}`, async ({ page }) => {
      await page.goto(path);
      const experiencia = page.locator("#experience");
      await expect(
        experiencia.getByText("Full Stack Developer — Web & Mobile"),
      ).toBeVisible();
      for (const bloque of bloques) {
        await expect(
          experiencia.getByRole("heading", { level: 4, name: bloque }),
        ).toBeVisible();
      }
    });
  }
});

test.describe("SEO y metadatos", () => {
  const casos = [
    {
      idioma: "español",
      path: "/es",
      titulo: /Full Stack Developer.*Coordinación Técnica de Proyectos IT/,
    },
    {
      idioma: "inglés",
      path: "/en",
      titulo: /Full Stack Developer.*IT Technical Project Coordination/,
    },
  ];

  for (const { idioma, path, titulo } of casos) {
    test(`el <title> refleja el posicionamiento en ${idioma}`, async ({
      page,
    }) => {
      await page.goto(path);
      await expect(page).toHaveTitle(titulo);
    });
  }

  for (const { idioma, path, alt } of [
    {
      idioma: "español",
      path: "/es",
      alt: /^Portfolio de Agustín Moyano, Full Stack Developer/,
    },
    {
      idioma: "inglés",
      path: "/en",
      alt: /^Portfolio of Agustín Moyano, Full Stack Developer/,
    },
  ]) {
    test(`la imagen OG tiene texto alternativo en ${idioma}`, async ({
      page,
    }) => {
      await page.goto(path);
      await expect(
        page.locator('meta[property="og:image:alt"]'),
      ).toHaveAttribute("content", alt);
    });
  }

  test("el JSON-LD conserva el cargo y suma coordinación de proyectos", async ({
    page,
  }) => {
    await page.goto("/es");
    const raw = await page
      .locator('script[type="application/ld+json"]')
      .textContent();
    const data = JSON.parse(raw ?? "{}");
    expect(data.jobTitle).toBe("Full Stack Developer");
    expect(data.knowsAbout).toEqual(
      expect.arrayContaining([
        "Software Development",
        "Technical Project Coordination",
        "Stakeholder Communication",
      ]),
    );
  });
});

test.describe("Descarga de CV por idioma", () => {
  test("en español sirve el PDF -es", async ({ page }) => {
    await page.goto("/es");
    const cv = page.getByRole("link", { name: /Descargar CV/ });
    await expect(cv).toHaveAttribute("href", /cv-agustin-moyano-es\.pdf$/);
  });

  test("en inglés sirve el PDF -en", async ({ page }) => {
    await page.goto("/en");
    const cv = page.getByRole("link", { name: /Download CV/ });
    await expect(cv).toHaveAttribute("href", /cv-agustin-moyano-en\.pdf$/);
  });
});

test.describe("Contacto", () => {
  test("los canales apuntan a los destinos correctos", async ({ page }) => {
    await page.goto("/es");
    await expect(
      page
        .locator('a[href="https://www.linkedin.com/in/agustinmoyano98/"]')
        .first(),
    ).toBeVisible();
    await expect(
      page.locator('a[href="https://github.com/AgusMoyan"]').first(),
    ).toBeVisible();
    await expect(
      page.locator('a[href="https://wa.me/5493388488336"]').first(),
    ).toBeVisible();
  });

  test("el email no está en el HTML servido (anti-scraping)", async ({
    request,
  }) => {
    const res = await request.get("/es");
    const html = await res.text();
    expect(html).not.toContain("moyano.agustin98@gmail.com");
  });
});

test.describe("Tema claro/oscuro", () => {
  test("el toggle alterna la clase dark", async ({ page }) => {
    await page.goto("/es");
    const isDark = () =>
      page.evaluate(() => document.documentElement.classList.contains("dark"));
    const before = await isDark();
    await page.getByRole("button", { name: "Cambiar tema" }).click();
    await expect.poll(isDark).toBe(!before);
  });
});

test.describe("404 localizado", () => {
  test("ruta inexistente devuelve 404 traducido", async ({ page }) => {
    const res = await page.goto("/es/ruta-que-no-existe");
    expect(res?.status()).toBe(404);
    await expect(
      page.getByRole("heading", { name: "Página no encontrada" }),
    ).toBeVisible();
  });
});

test.describe("Responsive (mobile)", () => {
  test.use({ viewport: { width: 375, height: 720 } });

  test("el menú mobile abre y muestra los links", async ({ page }) => {
    await page.goto("/es");
    const openMenu = page.getByRole("button", { name: "Abrir menú" });
    await expect(openMenu).toBeVisible();
    await openMenu.click();
    await expect(
      page.getByRole("link", { name: "Proyectos", exact: true }),
    ).toBeVisible();
  });
});
