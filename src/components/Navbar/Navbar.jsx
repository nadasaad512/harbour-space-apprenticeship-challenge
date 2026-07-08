export default function Navbar() {
  return (
    <nav
      className="
        w-full
        h-[130px]
        flex
        justify-between
        items-center
        px-8
        bg-[#6C63C4]
      "
    >

      {/* Brand Logo and Program Title */}
      <div className="flex flex-col">

        <span
          className="
            text-white
            font-bold
            tracking-wide
            text-[17px]
            leading-[25px]
          "
        >
          HARBOUR.SPACE
        </span>


        <span
          className="
            text-white/80
            text-[10px]
            leading-[11px]
            mt-[3.64px]
          "
        >
          /INTERACTION DESIGN
        </span>


      </div>



      {/* Navigation Actions */}
      <div
        className="
          flex
          items-center
          gap-6
        "
      >


        {/* Apply Button */}

        <div
          className="
            bg-[#4CAF7D]
            rounded-full
            w-16
            h-16
            flex
            items-center
            justify-center
            text-white
            font-bold
            text-xs
            text-center
            leading-tight
            cursor-pointer
            hover:opacity-90
            transition
          "
        >

          APPLY
          <br />
          NOW

        </div>




        {/* Menu Icon */}

        <img

          src="/menu-icon.svg"

          alt="menu"

          className="
            w-8
            h-6
            cursor-pointer
            hover:opacity-80
            transition
          "

        />


      </div>


    </nav>
  );
}