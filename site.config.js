module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: 'b01d27a11cf74afa8797e62b4911cf22',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'GulfStream',
  domain: 'gulfstream.app',
  author: 'GulfStream Team',

  // open graph metadata (optional)
  description: 'Best guild ever!',
  socialImageTitle: 'GulfStream',
  socialImageSubtitle: 'GulfStream',

  // social usernames (optional)
  wpp_avisos: 'https://chat.whatsapp.com/EJh7PRloYzdDqU0ijmwqbi',
  wpp_geral: 'https://chat.whatsapp.com/Bm2BylJb7FTFYZQtXMBhhs',
  wpp_instancias: 'https://chat.whatsapp.com/DoMKX5HlIEsFG0TawwpwnH',
  discord: 'https://discord.gg/azDJCaD',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null
}
