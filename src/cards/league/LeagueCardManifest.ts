import {CardName} from '../../CardName';
import {GameModule} from '../../GameModule';
import {CardManifest} from '../CardManifest';
import {DelayedEntry} from './league_project/DelayedEntry';
import {FireSale} from './league_project/FireSale';
import {FirstContact} from './league_preludes/FirstContact';
import {HeavyMetalBioremediation} from './league_project/HeavyMetalBioremediation';
import {Incinerator} from './league_project/Incinerator';
import {LaboratoryMice} from './league_project/LaboratoryMice';
import {ManOfThePeople} from './league_preludes/ManOfThePeople';
import {MarsHeavyIndustry} from './league_project/MarsHeavyIndustry';
import {MatingSeason} from './league_project/MatingSeason';
import {RecycledProjects} from './league_project/RecycledProjects';
import {TargetedTurmoil} from './league_project/TargetedTurmoil';

export const LEAGUE_CARD_MANIFEST = new CardManifest({
  module: GameModule.League,
  projectCards: [
    {cardName: CardName.DELAYED_ENTRY, Factory: DelayedEntry},
    {cardName: CardName.FIRE_SALE, Factory: FireSale},
    {cardName: CardName.HEAVY_METAL_BIOREMEDIATION, Factory: HeavyMetalBioremediation},
    {cardName: CardName.INCINERATOR, Factory: Incinerator},
    {cardName: CardName.LABORATORY_MICE, Factory: LaboratoryMice},
    {cardName: CardName.MARS_HEAVY_INDUSTRY, Factory: MarsHeavyIndustry},
    {cardName: CardName.MATING_SEASON, Factory: MatingSeason},
    {cardName: CardName.RECYCLED_PROJECTS, Factory: RecycledProjects},
    {cardName: CardName.TARGETED_TURMOIL, Factory: TargetedTurmoil, compatibility: GameModule.Turmoil},
  ],
  preludeCards: [
    {cardName: CardName.FIRST_CONTACT, Factory: FirstContact, compatibility: GameModule.Colonies},
    {cardName: CardName.MAN_OF_THE_PEOPLE, Factory: ManOfThePeople, compatibility: GameModule.Turmoil},
  ],
});
