export const formatSentence = (originalString: any, findCount = 3) => {
  const findThirdComma = (str: any) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === ".") {
        count++;
        if (count === findCount) {
          return i;
        }
      }
    }
    return -1; // If there are fewer than three commas
  };

  if (originalString) {
    const thirdCommaIndex = findThirdComma(originalString);

    let slicedString = "";
    if (thirdCommaIndex !== -1) {
      slicedString = originalString.slice(0, thirdCommaIndex + 1);
    }

    return slicedString;
  }
};

export const formatImage = (image: any) => {
  try {
    if (image) {
      return JSON.parse(image)[0];
    } else {
      return "";
    }
  } catch (error) {
    return image;
  }
};

export function removeHTMLTags(text: string) {
  if (text) {
    return text.replace(/<[^>]*>/g, "");
  }
}

export function formatDate(initDate: any, lang: any) {
  const id = lang === "en" ? "en-US" : "id-ID";

  if (initDate) {
    const date = new Date(initDate);

    const options: any = {
      month: "long",
      day: "numeric",
      year: "numeric",
    };

    const formattedDate = new Intl.DateTimeFormat(id, options).format(date);
    return formattedDate;
  }
}
