const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const uploadImageFile = async (img) => {
  try {
    const response = await fetch(`${BACKEND_URL}/blog/upload-url`);

    if (!response.ok) {
      throw new Error("Failed to fetch upload URL!");
    }

    const { uploadUrl } = await response.json();

    const uploadResponse = await fetch(uploadUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: img,
    });

    if (!uploadResponse.ok) {
      throw new Error("Failed to upload image!");
    }

    const imgUrl = uploadUrl.split("?")[0];
    return imgUrl;
  } catch (error) {
    console.log("Error uploading image:", error);
    return null;
  }
};
