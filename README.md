# 🎓 نظام رفع مشاريع الطلاب | Student Project Submission System

A bilingual (Arabic/English) student project submission system powered by GitHub Issues and GitHub Pages.

---

## 📋 الميزات | Features

- **نموذج ثنائي اللغة** (عربي/إنجليزي) لرفع بيانات الطالب والمشروع
- **رفع تقرير PDF** مباشرة إلى الـ repository
- **إنشاء GitHub Issue** تلقائياً لكل مشروع مرفوع
- **لوحة تحكيم** للجنة تعرض كل المشاريع مع فلاتر البحث والتصفية
- **تصميم متجاوب** يعمل على الجوال والحاسوب
- **دعم الوضع الداكن** تلقائياً

---

## ⚙️ الإعداد | Setup

### 1. إنشاء GitHub Token
1. اذهب إلى: **GitHub → Settings → Developer Settings → Personal Access Tokens → Fine-grained tokens**
2. أنشئ token جديد بالصلاحيات التالية على هذا الـ repository:
   - **Contents**: Read & Write (لرفع ملفات PDF)
   - **Issues**: Read & Write (لإنشاء Issues)
3. انسخ الـ token

### 2. تعديل `config.js`
```js
const CONFIG = {
  GITHUB_TOKEN: "ghp_xxxxxxxxxxxxxxxxxxxx",  // الصق الـ token هنا
  OWNER: "mayaalahmad1520015-ui",             // اسم المستخدم أو المؤسسة
  REPO: "projects_unv",                       // اسم الـ repository
  BRANCH: "main",
  // ...
};
```

### 3. تفعيل GitHub Pages
1. اذهب إلى **Settings → Pages**
2. اختر **Branch: main** والمجلد **/ (root)**
3. احفظ — سيصبح الموقع متاحاً على:
   `https://mayaalahmad1520015-ui.github.io/projects_unv/`

---

## 📄 صفحات النظام | Pages

| الصفحة | الوصف |
|---|---|
| `index.html` | نموذج رفع المشروع للطلاب |
| `dashboard.html` | لوحة تحكيم لجنة التقييم |
| `config.js` | إعدادات GitHub |
| `submissions/` | مجلد تقارير PDF (يُنشأ تلقائياً) |

---

## 🔄 كيف يعمل النظام | How It Works

```
الطالب يملأ النموذج
        ↓
رفع ملف PDF إلى مجلد submissions/ في الـ repo
        ↓
إنشاء GitHub Issue بكل معلومات الطالب والمشروع
        ↓
لجنة التحكيم ترى المشروع في Dashboard
        ↓
اللجنة تراجع وتعلق على الـ Issue في GitHub
```

---

## ⚠️ ملاحظات أمنية | Security Notes

- الـ GitHub Token مضمّن في الكود (Client-side) — يُنصح باستخدامه في بيئة مغلقة أو شبكة داخلية
- للاستخدام العام، استخدم **Fine-grained token** بأقل صلاحيات ممكنة (Issues + Contents فقط)
- يمكن نقل الـ token لاحقاً إلى **GitHub Actions** أو **Serverless function** للمزيد من الأمان
