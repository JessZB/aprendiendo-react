// @ts-check
import { test, expect } from "@playwright/test";

const LOCALHOST_URL = "http://localhost:5173";
const DOG_PREFIX_IMAGE_URL = "https://images.dog.ceo/breeds/";

test("app shows the fact and image", async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  const factSpan = await page.getByTestId("fact-dog-span");
  const imageDog = await page.getByTestId("dog-image");
  const factButton = await page.getByTestId("fact-random-btn");
  const selectDog = await page.getByTestId("image-dog-select");

  const factTextContent = await factSpan.textContent();
  const imageDogSrc = await imageDog.getAttribute("src");

  // Cuando se hace click en el boton de hechos
  await factButton.click();

  // Seleccionar imagen de perrito
  await selectDog.selectOption("akita");

  // URL DE IMAGEN Y HECHO ACTUALIZADO
  const updateFactTextContent = await factSpan.textContent();
  const updateImageDogSrc = await imageDog.getAttribute("src");

  // Si el hecho tiene algún contenido
  await expect(factTextContent?.length).toBeGreaterThan(0);
  // Si el hecho se actualiza
  await expect(updateFactTextContent).not.toEqual(factTextContent);

  // Si se visualiza una imagen
  await expect(imageDogSrc?.length).toBeGreaterThan(0);
  // Si la imagen cambia
  await expect(updateImageDogSrc).not.toEqual(imageDogSrc);

  // Si la imagen cambia
});
