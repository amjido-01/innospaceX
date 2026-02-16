export default function MapSection() {
  return (
    <section className="w-full h-[500px] grayscale hover:grayscale-0 transition-all duration-500 ease-in-out overflow-hidden my-20">
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        title="InnospaceX Kano Office"
        marginHeight={0}
        marginWidth={0}
        scrolling="no"
        src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Kano%20State%20Library%20Board,%20Ahmadu%20Bello%20Way,%20Nassarawa%20GRA,%20Kano&t=&z=14&ie=UTF8&iwloc=B&output=embed"
        style={{ filter: "contrast(1.1) brightness(1.1)" }}
      ></iframe>
    </section>
  );
}
