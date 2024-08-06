const truncateFileName = (fileName, maxLength) => {
  // Split the file name into name and extension
  const dotIndex = fileName.lastIndexOf(".");
  const name = dotIndex !== -1 ? fileName.substring(0, dotIndex) : fileName;
  const extension = dotIndex !== -1 ? fileName.substring(dotIndex) : "";

  // If the file name is within the maxLength, return it as is
  if (fileName.length <= maxLength) {
    return fileName;
  }

  // Calculate the length to truncate the name
  const truncatedNameLength = maxLength - extension.length - 3; // 3 for "..."
  const truncatedName = name.substring(0, truncatedNameLength);

  // Return the truncated name with the extension
  return `${truncatedName}...${extension}`;
};

export default truncateFileName;
