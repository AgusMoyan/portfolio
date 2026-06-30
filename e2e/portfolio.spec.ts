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
