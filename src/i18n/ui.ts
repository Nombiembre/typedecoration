export const languages = {
  en: "🇺🇸 English",
  es: "🇪🇸 Español",
  fr: "🇫🇷 Français",
};

export const defaultLang = "en";

interface Translations {
  [key: string]: string;
}

export const ui: { en: Translations; es: Translations; fr: Translations } = {
  en: {
    // SEO
    "index.title": "Create sleek geometric patterns.",
    "index.description":
      "We're just a couple of good folks building weekend projects & fun apps for the creative community out there.",

    "support.title": "TypeDecoration Support",
    "support.description":
      "Get in touch with the TypeDecoration team to ask for help, suggest features, report any bugs, or just say hi.",

    // Gui
    "canva.tryonapp": "Try App on Canva",
    "last-updated": "Last updated:",
    "support.name": "Your name",
    "support.email": "Your email goes here",
    "support.message": "Write your message",
    "support.submit": "Send Message",

    // Footer
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms and conditions",
    "footer.support": "Support",

    // FAQ
    "faq.1.title": "Can i use my fonts un your app?",
    "faq.1.body":
      "You can not upload your fonts for the moment. but we will implement this on the future",
    "faq.2.title": "Are your apps free?",
    "faq.2.body": "Yes, TypeDecoration is free for everyone.",
    "faq.3.title": "Do you have a comercial licence to use your apps?",
    "faq.3.body":
      "No, you can use TypeDecoration wherever you want. No licence is required.",
    "faq.4.title": "Can i do tutorials of your app?",
    "faq.4.body":
      "Absolutely! We love when people do tutorials of our app. Please share it with us if you do so!",
  },
  es: {
    // SEO
    "index.title": "Crea patrones geométricos elegantes.",
    "index.description":
      "Solo somos un par de buenas personas que crean proyectos de fin de semana y aplicaciones divertidas para la comunidad creativa.",

    "support.title": "Soporte de TypeDecoration",
    "support.description":
      "Póngase en contacto con el equipo de TypeDecoration para pedir ayuda, sugerir características, informar de cualquier error o simplemente hablar.",

    // Gui
    "canva.tryonapp": "Probar app en Canva",
    "last-updated": "Última actualización:",
    "support.name": "Tu nombre",
    "support.email": "Tu correo electrónico",
    "support.message": "Escribe tu mensaje",
    "support.submit": "Enviar Mensaje",

    // Footer
    "footer.privacy": "Política de privacidad",
    "footer.terms": "Términos y condiciones",
    "footer.support": "Soporte",

    // FAQ
    "faq.1.title": "¿Puedo usar mis fuentes en tu aplicación?",
    "faq.1.body":
      "No puedes cargar tus fuentes por el momento, pero lo implementaremos en el futuro",
    "faq.2.title": "¿Tus aplicaciones son gratuitas?",
    "faq.2.body": "Sí, TypeDecoration es gratuito para todos.",
    "faq.3.title": "¿Tiene una licencia comercial para usar sus aplicaciones?",
    "faq.3.body":
      "No, puedes usar TypeDecoration donde quieras. No se requiere licencia.",
    "faq.4.title": "¿Puedo hacer tutoriales de tu aplicación?",
    "faq.4.body":
      "¡Absolutamente! Nos encanta cuando la gente hace tutoriales de nuestra aplicación. ¡Compártelo con nosotros si lo haces!",
  },
  fr: {
    // SEO
    "index.title": "Créer des motifs géométriques élégants.",
    "index.description":
      "Nous ne sommes que quelques bonnes personnes qui créent des projets de week-end et des applications amusantes pour la communauté créative.",

    "support.title": "TypeDécoration Support",
    "support.description":
      "Contactez l'équipe TypeDecoration pour demander de l'aide, suggérer des fonctionnalités, signaler des bugs ou simplement dire bonjour.",

    // Gui
    "canva.tryonapp": "Essayer l'App sur Canva",
    "last-updated": "Dernière mise à jour:",
    "support.name": "Votre nom",
    "support.email": "Votre adresse e-mail",
    "support.message": "Écrivez votre message",
    "support.submit": "Envoyer",

    // Footer
    "footer.terms": "Termes et conditions",
    "footer.privacy": "Politique de confidentialité",
    "footer.support": "Support",

    // FAQ
    "faq.1.title": "Puis-je utiliser mes polices dans votre application ?",
    "faq.1.body":
      "Vous ne pouvez pas télécharger vos polices pour le moment, mais nous le mettrons en œuvre à l'avenir",
    "faq.2.title": "Vos applications sont-elles gratuites ?",
    "faq.2.body": "Oui, TypeDecoration est gratuit pour tout le monde.",
    "faq.3.title":
      "Avez-vous une licence commerciale pour utiliser vos applications ?",
    "faq.3.body":
      "Non, vous pouvez utiliser TypeDecoration où vous le souhaitez. Aucune licence n'est requise.",
    "faq.4.title": "Puis-je faire des tutoriels sur votre application ?",
    "faq.4.body":
      "Absolument ! Nous aimons quand les gens font des tutoriels sur notre application. Partagez-les avec nous si vous le faites !",
  },
};
