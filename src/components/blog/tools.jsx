import Embed from "@editorjs/embed";
import List from "@editorjs/list";
import Image from "@editorjs/image";
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";
import Marker from "@editorjs/marker";
import InlineCode from "@editorjs/inline-code";
import { uploadImageFile } from "../../common/aws";

const uploadBlogImageByFile = (e) => {
  // console.log(e);

  return uploadImageFile(e).then((imgUrl) => {
    if (imgUrl) {
      return {
        success: imgUrl ? 1 : 0,
        file: { imgUrl },
      };
    }
  });
};

const uploadImageByUrl = (e) => {
  let link = new Promise((resolve, reject) => {
    try {
      resolve(e);
    } catch (error) {
      reject(error);
    }
  });

  return link.then((url) => {
    return {
      success: 1,
      file: { url },
    };
  });
};

export const tools = {
  embed: Embed,
  list: { class: List, inlineToolbar: true },
  image: {
    class: Image,
    config: {
      uploader: {
        uploadByUrl: uploadImageByUrl,
        uploadByFile: uploadBlogImageByFile,
      },
    },
  },
  header: {
    class: Header,
    config: { placeholder: "Type heading..." },
    levels: [2, 3, 4],
    defaultLevel: 2,
  },
  quote: { class: Quote, inlineToolbar: true },
  marker: Marker,
  inlineCode: InlineCode,
};
