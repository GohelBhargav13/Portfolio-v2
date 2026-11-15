function Footer() {
  return (
    <div className="w-full max-w-342.5 bg-gray-950/95 text-white">
      <hr className="border-gray-500/70" />

      <div className="mt-3 px-3 py-2 text-center sm:py-2.5">
        <p className="text-xs text-gray-300/80 sm:text-sm">
          &copy; {new Date().getFullYear()} Built By Bhargav 🚀 |
          #BuiltByBhargav
        </p>
      </div>
    </div>
  );
}

export default Footer;
