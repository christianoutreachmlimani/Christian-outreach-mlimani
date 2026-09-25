export const church = {
  name: "Christian Outreach Ministries Worldwide – Mlimani",
  shortName: "Christian Outreach Mlimani",
  phone: "+254 718 801 392",
  phoneHref: "tel:+254718801392",
  email: "christianoutreachmlimani@gmail.com",
  emailHref: "mailto:christianoutreachmlimani@gmail.com",
  address: "Mlimani Market, near St. Augustine Secondary School, Mautuma Ward, Kakamega County",
  maps: "https://www.google.com/maps/search/?api=1&query=Mlimani%20Market%20near%20St%20Augustine%20Secondary%20School%20Mautuma%20Ward%20Kakamega%20County",
  whatsapp: "https://wa.me/254718801392",
  youtube: "https://www.youtube.com/@mlimanicoc",
  facebook: "https://web.facebook.com/profile.php?id=100091250898530",
  tiktok: "https://www.tiktok.com/@christianoutreachmlimani",
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Leadership", href: "/leadership" },
  { label: "Ministries", href: "/ministries" },
  { label: "Programs", href: "/programs" },
  { label: "Sermons", href: "/sermons" },
  { label: "Watch Live", href: "/watch" },
  { label: "Gallery", href: "/gallery" },
  { label: "Giving", href: "/giving" },
  { label: "Contact", href: "/contact" },
] as const;

export const ministries = [
  { slug: "sunday-school", number: "01", title: "Sunday School", description: "Biblical teaching and spiritual formation for children.", detail: "Children have a place to learn God's Word and grow in faith alongside the church family." },
  { slug: "youth-ministry", number: "02", title: "Youth Ministry", description: "Faith, fellowship and Christian growth for young people.", detail: "Young people can connect with one another, explore the Bible and grow in their walk with Christ." },
  { slug: "mens-ministry", number: "03", title: "Men’s Ministry", description: "Fellowship, discipleship and service among men.", detail: "Men are invited to encourage one another through fellowship, prayer and service." },
  { slug: "womens-ministry", number: "04", title: "Women’s Ministry", description: "Prayer, fellowship, encouragement and spiritual growth.", detail: "Women gather around prayer, mutual encouragement and growing together in faith." },
  { slug: "worship-team", number: "05", title: "Worship Team", description: "Leading the congregation in praise and worship.", detail: "The worship team serves the congregation through music and shared praise." },
  { slug: "intercessory-prayer", number: "06", title: "Intercessory Prayer", description: "Standing together in prayer for the church and community.", detail: "We bring the needs of the church, our neighbors and the wider community before God." },
  { slug: "evangelism", number: "07", title: "Evangelism", description: "Sharing the Gospel and reaching people with Christ’s message.", detail: "Our church seeks to share the good news of Jesus Christ beyond its walls." },
] as const;

export const sundayProgram = [
  { time: "8:00–9:00 AM", name: "Worship" },
  { time: "9:00–10:00 AM", name: "Intercessory Prayers" },
  { time: "10:00–11:00 AM", name: "Teachings — Sunday School, Youth & Adults" },
  { time: "11:00 AM–12:00 PM", name: "Praise & Worship" },
  { time: "12:00–1:00 PM", name: "Main Service" },
] as const;

export const midweekProgram = [
  { time: "Wednesday · 5:30–6:30 PM", name: "Fellowship" },
  { time: "Friday · 7:00–9:00 PM", name: "Prayer" },
  { time: "Saturday · 7:00–9:00 PM", name: "Praise & Worship Team Practice" },
] as const;
