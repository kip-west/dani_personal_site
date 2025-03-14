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
        src="/dani.png"
        alt=""
        className="w-full max-w-[500px] max-h-[500px] rounded-full"
      />
      <div className="flex flex-col gap-2">
        <h1 className="flex flex-col lg:flex-row gap-1 items-center">
          <span className="text-xl flex items-center gap-1">
            Dani Leah Strauss<span className="italic text-sm">(she/her)</span>
          </span>
          <span className="font-bold">Therapist, LCSW</span>
        </h1>
        <div className="grid gap-2">
          <span>
            I am a queer, feminist, sex-positive therapist and doula committed
            to creating a therapeutic space where all of the parts of you feel
            welcome and at ease. I bring my openness, curiosity, and sense of
            humor into my sessions. My practice is an affirming environment for
            folks of all genders and sexual identities. While I specialize in
            working with intimacy and sexuality, I also love to support people
            in work around self-love & resiliency.
          </span>
          <span>
            I utilize elements of physical, spiritual, and emotional mindfulness
            in a blend of talk therapy and somatic therapy to help people
            connect to the parts of themselves that haven&apos;t had room to
            thrive. My work focuses on creating space for shame, grief, and hurt
            to move through us, on celebrating our deep capacity for embodiment
            and wisdom, and on cultivating connection as a tool for healing from
            oppression.
          </span>
          <span>
            I draw on my training in social work, yoga, sexual health, and
            trauma to facilitate Intimacy and Embodiment Therapy with
            individuals and couples. Intimacy is the process of connecting to
            our willingness to be held and known. This therapy is offered to
            support you in the process of uncovering your own power and worth,
            and forging meaningful connections with others that come from a
            place of self-knowing.
          </span>
        </div>
      </div>
    </div>
  );
}
