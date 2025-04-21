import classNames from "classnames";

export function BioPage() {
  return (
    <div
      className={classNames(
        "flex items-center",
        "flex-col gap-2",
        "lg:flex-row lg:gap-8"
      )}
    >
      <img
        src="/nymph.png"
        alt=""
        className="w-full max-w-[500px] max-h-[500px] rounded-full"
      />
      <div className="flex flex-col gap-2">
        <h1 className="flex flex-col lg:flex-row gap-1 items-center">
          <span className="text-xl flex items-center gap-1">
            Camilo Caridad Pineda
            <span className="italic text-sm">(they/fab)</span>
          </span>
          <span className="font-bold">Motherfucking Marketing Genius</span>
        </h1>
        <div className="grid gap-2">
          <span>
            I'm a marketing genius. I'm also a motherfucking marketing genius.
          </span>
        </div>
      </div>
    </div>
  );
}
