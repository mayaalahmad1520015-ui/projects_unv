// ⚙️ GitHub Configuration — edit these values before deploying
const CONFIG = {
  // GitHub personal access token (fine-grained: Issues: Read & Write, Contents: Read & Write)
  // Generate at: https://github.com/settings/tokens
  GITHUB_TOKEN: "github_pat_11CDWYI7Q0u5hgLnFDO9uC_seGJPqoTLJ7qrLLM6NFpxUcs4MZFn7Om3E6qGiauCaASXOYXVVTJy4T",

  // Your GitHub username or organization
  OWNER: "mayaalahmad1520015-ui",

  // Repository name
  REPO: "projects_unv",

  // Branch where PDFs will be stored
  BRANCH: "main",

  // Folder inside the repo to store uploaded PDFs
  SUBMISSIONS_FOLDER: "submissions",

  // Academic levels — edit to match your university
  LEVELS: [
    { value: "1", labelAr: "المستوى الأول",  labelEn: "Level 1 (Year 1)" },
    { value: "2", labelAr: "المستوى الثاني", labelEn: "Level 2 (Year 2)" },
    { value: "3", labelAr: "المستوى الثالث", labelEn: "Level 3 (Year 3)" },
    { value: "4", labelAr: "المستوى الرابع", labelEn: "Level 4 (Year 4)" },
    { value: "5", labelAr: "المستوى الخامس", labelEn: "Level 5 (Year 5)" },
  ],

  // Issue labels automatically applied on submission
  LABELS: ["project-submission"],
};
