import { createUploadthing } from "uploadthing/next";

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  advertImageUploader: f({ image: { maxFileSize: "1MB" } })
    // Set permissions and file types for this FileRoute
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("file url", file.url, metadata);
      return { uploadedBy: "ZimProperties" };
    }),
  // advertImageUploader: f({ image: { maxFileSize: "2MB" } })
  //   // Set permissions and file types for this FileRoute
  //   .onUploadComplete(async ({ metadata, file }) => {
  //     console.log("file url", file.url, metadata);
  //     return { uploadedBy: "ZimProperties" };
  //   }),

  // marketLogoUploader: f({ image: { maxFileSize: "1MB" } })
  //   // Set permissions and file types for this FileRoute
  //   .onUploadComplete(async ({ metadata, file }) => {
  //     console.log("file url", file.url, metadata);
  //     return { uploadedBy: "ZimProperties" };
  //   }),
  propertyImageUploader: f({ image: { maxFileSize: "1MB" } })
    // Set permissions and file types for this FileRoute
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("file url", file.url, metadata);
      return { uploadedBy: "ZimProperties" };
    }),
  blogImageUploader: f({ image: { maxFileSize: "1MB" } })
    // Set permissions and file types for this FileRoute
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("file url", file.url, metadata);
      return { uploadedBy: "ZimProperties" };
    }),
  agentProfileUploader: f({ image: { maxFileSize: "1MB" } })
    // Set permissions and file types for this FileRoute
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("file url", file.url, metadata);
      return { uploadedBy: "ZimProperties" };
    }),
  companyProfileUploader: f({ image: { maxFileSize: "1MB" } })
    // Set permissions and file types for this FileRoute
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("file url", file.url, metadata);
      return { uploadedBy: "ZimProperties" };
    }),
  multiplePropertyUploader: f({
    image: { maxFileSize: "10MB", maxFileCount: 8 },
  })
    // Set permissions and file types for this FileRoute
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("file url", file.url, metadata);
      return { uploadedBy: "ZimProperties" };
    }),
};
