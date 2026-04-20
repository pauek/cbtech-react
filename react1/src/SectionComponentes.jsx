import Bombilla from "./Bombilla";
import BurguerCookPoint from "./BurguerCookPoint";
import BurguerExtras from "./BurguerExtras";
import ChooseNumber from "./ChooseNumber";
import FiltroPaises from "./FiltroPaises";

export default function SectionComponentes() {
  return (
    <section>
      <h2>Componentes con estado</h2>
      <div className="grid grid-cols-2 gap-2">
        <Bombilla />
        <BurguerExtras />
        <BurguerCookPoint />
        <FiltroPaises />
        <ChooseNumber initial={4} low={0} high={10} />
        <ChooseNumber initial={2} low={0} high={4} />
      </div>
    </section>
  );
}
