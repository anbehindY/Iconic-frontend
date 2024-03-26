import { LuChevronRightCircle } from "react-icons/lu";

export default function Collections() {
    return(
        <section className="bg-slate-300/20 flex justify-center items-center gap-16 px-4 py-32 w-full">
        {[1, 2, 3, 4, 5].map((item) => {
          return (
            <div
              className="card w-44 h-48 bg-base-100 shadow-xl p-6"
              key={item}
            >
              <figure className="hover:scale-105">
                <img
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="mx-auto mt-auto flex">
                <h2 className="text-sm mr-2">Power Treads</h2>
                <LuChevronRightCircle className="text-xl" />
              </div>
            </div>
          );
        })}
      </section>
    )
}