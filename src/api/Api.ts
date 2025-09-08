/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface AbilityChange {
  version_group: VersionGroupSummary
  effect_entries: AbilityChangeEffectText[]
}

export interface AbilityChangeEffectText {
  /** @maxLength 6000 */
  effect: string
  language: LanguageSummary
}

export interface AbilityDetail {
  id: number
  /** @maxLength 200 */
  name: string
  is_main_series?: boolean
  generation: GenerationSummary
  names: AbilityName[]
  effect_entries: AbilityEffectText[]
  effect_changes: AbilityChange[]
  flavor_text_entries: AbilityFlavorText[]
  pokemon: {
    is_hidden: boolean
    /** @format int32 */
    slot: number
    pokemon: {
      name: string
      /** @format uri */
      url: string
    }
  }[]
}

export interface AbilityEffectText {
  /** @maxLength 6000 */
  effect: string
  /** @maxLength 300 */
  short_effect: string
  language: LanguageSummary
}

export interface AbilityFlavorText {
  flavor_text: string
  language: LanguageSummary
  version_group: VersionGroupSummary
}

export interface AbilityName {
  /** @maxLength 200 */
  name: string
  language: LanguageSummary
}

export interface AbilitySummary {
  /** @maxLength 200 */
  name: string
  /** @format uri */
  url: string
}

export interface BerryDetail {
  id: number
  /** @maxLength 200 */
  name: string
  growth_time: number
  max_harvest: number
  natural_gift_power: number
  size: number
  smoothness: number
  soil_dryness: number
  firmness: BerryFirmnessSummary
  flavors: {
    potency: number
    flavor: {
      /** The name of the flavor */
      name?: string
      /**
       * The URL to get more information about the flavor
       * @format uri
       */
      url?: string
    }
  }[]
  item: ItemSummary
  natural_gift_type: TypeSummary
}

export interface BerryFirmnessDetail {
  id: number
  /** @maxLength 200 */
  name: string
  berries: BerrySummary[]
  names: BerryFirmnessName[]
}

export interface BerryFirmnessName {
  /** @maxLength 200 */
  name: string
  language: LanguageSummary
}

export interface BerryFirmnessSummary {
  /** @maxLength 200 */
  name: string
  /** @format uri */
  url: string
}

export interface BerryFlavorDetail {
  id: number
  /** @maxLength 200 */
  name: string
  berries: {
    potency: number
    berry: {
      /** The name of the berry */
      name?: string
      /**
       * The URL to get more information about the berry
       * @format uri
       */
      url?: string
    }
  }[]
  contest_type: ContestTypeSummary
  names: BerryFlavorName[]
}

export interface BerryFlavorName {
  /** @maxLength 200 */
  name: string
  language: LanguageSummary
}

export interface BerryFlavorSummary {
  /** @maxLength 200 */
  name: string
  /** @format uri */
  url: string
}

export interface BerrySummary {
  /** @maxLength 200 */
  name: string
  /** @format uri */
  url: string
}

export interface CharacteristicDescription {
  /** @maxLength 1000 */
  description?: string
  language: LanguageSummary
}

export interface CharacteristicDetail {
  id: number
  gene_modulo: number
  possible_values: number[]
  highest_stat: StatSummary
  descriptions: CharacteristicDescription[]
}

export interface CharacteristicSummary {
  /** @format uri */
  url: string
}

export interface ContestEffectDetail {
  id: number
  appeal: number
  jam: number
  effect_entries: ContestEffectEffectText[]
  flavor_text_entries: ContestEffectFlavorText[]
}

export interface ContestEffectEffectText {
  /** @maxLength 6000 */
  effect: string
  language: LanguageSummary
}

export interface ContestEffectFlavorText {
  /** @maxLength 500 */
  flavor_text: string
  language: LanguageSummary
}

export interface ContestEffectSummary {
  /** @format uri */
  url: string
}

export interface ContestTypeDetail {
  id: number
  /** @maxLength 200 */
  name: string
  berry_flavor: BerryFlavorSummary
  names: ContestTypeName[]
}

export interface ContestTypeName {
  /** @maxLength 200 */
  name: string
  /** @maxLength 10 */
  color: string
  language: LanguageSummary
}

export interface ContestTypeSummary {
  /** @maxLength 200 */
  name: string
  /** @format uri */
  url: string
}

export interface EggGroupDetail {
  id: number
  /** @maxLength 200 */
  name: string
  names: EggGroupName[]
  pokemon_species: {
    /** Pokemon species name. */
    name?: string
    /**
     * The URL to get more information about the species
     * @format uri
     */
    url?: string
  }[]
}

export interface EggGroupName {
  /** @maxLength 200 */
  name: string
  language: LanguageSummary
}

export interface EggGroupSummary {
  /** @maxLength 200 */
  name: string
  /** @format uri */
  url: string
}

export interface EncounterConditionDetail {
  id: number
  /** @maxLength 200 */
  name: string
  values: EncounterConditionValueSummary[]
  names: EncounterConditionName[]
}

export interface EncounterConditionName {
  /** @maxLength 200 */
  name: string
  language: LanguageSummary
}

export interface EncounterConditionSummary {
  /** @maxLength 200 */
  name: string
  /** @format uri */
  url: string
}

export interface EncounterConditionValueDetail {
  id: number
  /** @maxLength 200 */
  name: string
  condition: EncounterConditionSummary
  names: EncounterConditionValueName[]
}

export interface EncounterConditionValueName {
  /** @maxLength 200 */
  name: string
  language: LanguageSummary
}

export interface EncounterConditionValueSummary {
  /** @maxLength 200 */
  name: string
  /** @format uri */
  url: string
}

export interface EncounterMethodDetail {
  id: number
  /** @maxLength 200 */
  name: string
  order?: number | null
  names: EncounterMethodName[]
}

export interface EncounterMethodName {
  /** @maxLength 200 */
  name: string
  language: LanguageSummary
}

export interface EncounterMethodSummary {
  /** @maxLength 200 */
  name: string
  /** @format uri */
  url: string
}

export interface EvolutionChainDetail {
  id: number
  baby_trigger_item: ItemSummary
  chain: {
    evolution_details: any[]
    evolves_to: {
      evolution_details: {
        gender: {
          name: string
          /** @format uri */
          url: string
        } | null
        held_item: {
          name: string
          /** @format uri */
          url: string
        } | null
        item: {
          name: string
          /** @format uri */
          url: string
        } | null
        known_move: any
        known_move_type: any
        location: {
          name: string
          /** @format uri */
          url: string
        } | null
        /** @format int32 */
        min_affection: number | null
        /** @format int32 */
        min_beauty: number | null
        /** @format int32 */
        min_happiness: number | null
        /** @format int32 */
        min_level: number | null
        needs_overworld_rain: boolean | null
        party_species: string | null
        party_type: string | null
        relative_physical_stats: string | null
        time_of_day: string
        trade_species: string | null
        trigger: {
          name: string
          /** @format uri */
          url: string
        }
        turn_upside_down: boolean
      }[]
      is_baby: boolean
      species: {
        name: string
        /** @format uri */
        url: string
      }
    }[]
    is_baby: boolean
    species: {
      name: string
      /** @format uri */
      url: string
    }
  }
}

export interface EvolutionChainSummary {
  /** @format uri */
  url: string
}

export interface EvolutionTriggerDetail {
  id: number
  /** @maxLength 200 */
  name: string
  names: EvolutionTriggerName[]
  pokemon_species: {
    name: string
    /** @format uri */
    url: string
  }[]
}

export interface EvolutionTriggerName {
  /** @maxLength 200 */
  name: string
  language: LanguageSummary
}

export interface EvolutionTriggerSummary {
  /** @maxLength 200 */
  name: string
  /** @format uri */
  url: string
}

export interface Experience {
  level: number
  experience: number
}

export interface GenderDetail {
  id: number
  /** @maxLength 200 */
  name: string
  pokemon_species_details: {
    /** @format int32 */
    rate: number
    pokemon_species: {
      name: string
      /** @format uri */
      url: string
    }
  }[]
  required_for_evolution: {
    name: string
    /** @format uri */
    url: string
  }[]
}

export interface GenderSummary {
  /** @maxLength 200 */
  name: string
  /** @format uri */
  url: string
}

export interface GenerationDetail {
  id: number
  /** @maxLength 200 */
  name: string
  abilities: AbilitySummary[]
  main_region: RegionSummary
  moves: MoveSummary[]
  names: GenerationName[]
  pokemon_species: PokemonSpeciesSummary[]
  types: TypeSummary[]
  version_groups: VersionGroupSummary[]
}

export interface GenerationName {
  /** @maxLength 200 */
  name: string
  language: LanguageSummary
}

export interface GenerationSummary {
  /** @maxLength 200 */
  name: string
  /** @format uri */
  url: string
}

export interface GrowthRateDescription {
  /** @maxLength 1000 */
  description?: string
  language: LanguageSummary
}

export interface GrowthRateDetail {
  id: number
  /** @maxLength 200 */
  name: string
  /** @maxLength 500 */
  formula: string
  descriptions: GrowthRateDescription[]
  levels: Experience[]
  pokemon_species: PokemonSpeciesSummary[]
}

export interface GrowthRateSummary {
  /** @maxLength 200 */
  name: string
  /** @format uri */
  url: string
}

export interface ItemAttributeDescription {
  /** @maxLength 1000 */
  description?: string
  language: LanguageSummary
}

export interface ItemAttributeDetail {
  id: number
  /** @maxLength 200 */
  name: string
  descriptions: ItemAttributeDescription[]
  items: {
    name: string
    /** @format uri */
    url: string
  }[]
  names: ItemAttributeName[]
}

export interface ItemAttributeName {
  /** @maxLength 200 */
  name: string
  language: LanguageSummary
}

export interface ItemAttributeSummary {
  /** @maxLength 200 */
  name: string
  /** @format uri */
  url: string
}

export interface ItemCategoryDetail {
  id: number
  /** @maxLength 200 */
  name: string
  items: ItemSummary[]
  names: ItemCategoryName[]
  pocket: ItemPocketSummary
}

export interface ItemCategoryName {
  /** @maxLength 200 */
  name: string
  language: LanguageSummary
}

export interface ItemCategorySummary {
  /** @maxLength 200 */
  name: string
  /** @format uri */
  url: string
}

export interface ItemDetail {
  id: number
  /** @maxLength 200 */
  name: string
  cost?: number | null
  fling_power?: number | null
  fling_effect: ItemFlingEffectSummary
  attributes: {
    name: string
    /** @format uri */
    url: string
  }[]
  category: ItemCategorySummary
  effect_entries: ItemEffectText[]
  flavor_text_entries: ItemFlavorText[]
  game_indices: ItemGameIndex[]
  names: ItemName[]
  held_by_pokemon: {
    pokemon: {
      name: string
      /** @format uri */
      url: string
    }
    'version-details': {
      /** @format int32 */
      rarity: number
      version: {
        name: string
        /** @format uri */
        url: string
      }
    }[]
  }[]
  sprites: {
    /** @format uri */
    default: string
  }
  baby_trigger_for: {
    /** @format uri */
    url: string
  }
  machines: {
    /** @format uri */
    machine: string
    version_group: {
      name: string
      /** @format uri */
      url: string
    }
  }[]
}

export interface ItemEffectText {
  /** @maxLength 6000 */
  effect: string
  /** @maxLength 300 */
  short_effect: string
  language: LanguageSummary
}

export interface ItemFlavorText {
  text: string
  version_group: VersionGroupSummary
  language: LanguageSummary
}

export interface ItemFlingEffectDetail {
  id: number
  /** @maxLength 200 */
  name: string
  effect_entries: ItemFlingEffectEffectText[]
  items: ItemSummary[]
}

export interface ItemFlingEffectEffectText {
  /** @maxLength 6000 */
  effect: string
  language: LanguageSummary
}

export interface ItemFlingEffectSummary {
  /** @maxLength 200 */
  name: string
  /** @format uri */
  url: string
}

export interface ItemGameIndex {
  game_index: number
  generation: GenerationSummary
}

export interface ItemName {
  /** @maxLength 200 */
  name: string
  language: LanguageSummary
}

export interface ItemPocketDetail {
  id: number
  /** @maxLength 200 */
  name: string
  categories: ItemCategorySummary[]
  names: ItemPocketName[]
}

export interface ItemPocketName {
  /** @maxLength 200 */
  name: string
  language: LanguageSummary
}

export interface ItemPocketSummary {
  /** @maxLength 200 */
  name: string
  /** @format uri */
  url: string
}

export interface ItemSummary {
  /** @maxLength 200 */
  name: string
  /** @format uri */
  url: string
}

export interface LanguageDetail {
  id: number
  /** @maxLength 200 */
  name: string
  official?: boolean
  /** @maxLength 10 */
  iso639: string
  /** @maxLength 2 */
  iso3166: string
  names: LanguageName[]
}

export interface LanguageName {
  /** @maxLength 200 */
  name: string
  language: LanguageSummary
}

export interface LanguageSummary {
  /** @maxLength 200 */
  name: string
  /** @format uri */
  url: string
}

export interface LocationAreaDetail {
  id: number
  /** @maxLength 200 */
  name: string
  game_index: number
  encounter_method_rates: {
    encounter_method: {
      name: string
      /** @format uri */
      url: string
    }
    version_details: {
      /** @format int32 */
      rate: number
      version: {
        name: string
        /** @format uri */
        url: string
      }
    }[]
  }[]
  location: LocationSummary
  names: LocationAreaName[]
  pokemon_encounters: {
    pokemon: {
      name: string
      /** @format uri */
      url: string
    }
    version_details: {
      version: {
        name: string
        /** @format uri */
        url: string
      }
      /** @format int32 */
      max_chance: number
      encounter_details: {
        /** @format int32 */
        min_level: number
        /** @format int32 */
        max_level: number
        condition_values?: {
          name: string
          /** @format uri */
          url: string
        }
        /** @format int32 */
        chance: number
        method: {
          name: string
          /** @format uri */
          url: string
        }
      }
    }[]
  }[]
}

export interface LocationAreaName {
  /** @maxLength 200 */
  name: string
  language: LanguageSummary
}

export interface LocationAreaSummary {
  /** @maxLength 200 */
  name: string
  /** @format uri */
  url: string
}

export interface LocationDetail {
  id: number
  /** @maxLength 200 */
  name: string
  region: RegionSummary
  names: LocationName[]
  game_indices: LocationGameIndex[]
  areas: LocationAreaSummary[]
}

export interface LocationGameIndex {
  game_index: number
  generation: GenerationSummary
}

export interface LocationName {
  /** @maxLength 200 */
  name: string
  language: LanguageSummary
}

export interface LocationSummary {
  /** @maxLength 200 */
  name: string
  /** @format uri */
  url: string
}

export interface MachineDetail {
  id: number
  item: ItemSummary
  version_group: VersionGroupSummary
  move: MoveSummary
}

export interface MachineSummary {
  /** @format uri */
  url: string
}

export interface MoveBattleStyleDetail {
  id: number
  /** @maxLength 200 */
  name: string
  names: MoveBattleStyleName[]
}

export interface MoveBattleStyleName {
  /** @maxLength 200 */
  name: string
  language: LanguageSummary
}

export interface MoveBattleStyleSummary {
  /** @maxLength 200 */
  name: string
  /** @format uri */
  url: string
}

export interface MoveChange {
  accuracy?: number | null
  power?: number | null
  pp?: number | null
  effect_chance: number
  effect_entries: {
    effect: string
    short_effect: string
    language: {
      name: string
      /** @format uri */
      url: string
    }
  }[]
  type: TypeSummary
  version_group: VersionGroupSummary
}

export interface MoveDamageClassDescription {
  /** @maxLength 1000 */
  description?: string
  language: LanguageSummary
}

export interface MoveDamageClassDetail {
  id: number
  /** @maxLength 200 */
  name: string
  descriptions: MoveDamageClassDescription[]
  moves: MoveSummary[]
  names: MoveDamageClassName[]
}

export interface MoveDamageClassName {
  /** @maxLength 200 */
  name: string
  language: LanguageSummary
}

export interface MoveDamageClassSummary {
  /** @maxLength 200 */
  name: string
  /** @format uri */
  url: string
}

export interface MoveDetail {
  id: number
  /** @maxLength 200 */
  name: string
  accuracy?: number | null
  effect_chance: number
  pp?: number | null
  priority?: number | null
  power?: number | null
  contest_combos: {
    normal: {
      use_before:
        | {
            name: string
            /** @format uri */
            url: string
          }[]
        | null
      use_after:
        | {
            name: string
            /** @format uri */
            url: string
          }[]
        | null
    }
    super: {
      use_before:
        | {
            name: string
            /** @format uri */
            url: string
          }[]
        | null
      use_after:
        | {
            name: string
            /** @format uri */
            url: string
          }[]
        | null
    }
  }
  contest_type: ContestTypeSummary
  contest_effect: ContestEffectSummary
  damage_class: MoveDamageClassSummary
  effect_entries: {
    effect: string
    short_effect: string
    language: {
      name: string
      /** @format uri */
      url: string
    }
  }[]
  effect_changes: {
    effect_entries: {
      effect: string
      language: {
        name: string
        /** @format uri */
        url: string
      }
    }[]
    version_group: {
      name: string
      /** @format uri */
      url: string
    }
  }[]
  generation: GenerationSummary
  meta: MoveMeta
  names: MoveName[]
  past_values: MoveChange[]
  stat_changes: {
    /** @format int32 */
    change: number
    stat: {
      name: string
      /** @format uri */
      url: string
    }
  }[]
  super_contest_effect: SuperContestEffectSummary
  target: MoveTargetSummary
  type: TypeSummary
  machines: {
    machine: {
      /** @format uri */
      url: string
    }
    version_group: {
      name: string
      /** @format uri */
      url: string
    }
  }[]
  flavor_text_entries: MoveFlavorText[]
  learned_by_pokemon: {
    name: string
    /** @format uri */
    url: string
  }[]
}

export interface MoveFlavorText {
  flavor_text: string
  language: LanguageSummary
  version_group: VersionGroupSummary
}

export interface MoveLearnMethodDescription {
  /** @maxLength 1000 */
  description?: string
  language: LanguageSummary
}

export interface MoveLearnMethodDetail {
  id: number
  /** @maxLength 200 */
  name: string
  names: MoveLearnMethodName[]
  descriptions: MoveLearnMethodDescription[]
  version_groups: {
    name: string
    /** @format uri */
    url: string
  }[]
}

export interface MoveLearnMethodName {
  /** @maxLength 200 */
  name: string
  language: LanguageSummary
}

export interface MoveLearnMethodSummary {
  /** @maxLength 200 */
  name: string
  /** @format uri */
  url: string
}

export interface MoveMeta {
  ailment: MoveMetaAilmentSummary
  category: MoveMetaCategorySummary
  min_hits?: number | null
  max_hits?: number | null
  min_turns?: number | null
  max_turns?: number | null
  drain?: number | null
  healing?: number | null
  crit_rate?: number | null
  ailment_chance?: number | null
  flinch_chance?: number | null
  stat_chance?: number | null
}

export interface MoveMetaAilmentDetail {
  id: number
  /** @maxLength 200 */
  name: string
  moves: {
    name: string
    /** @format uri */
    url: string
  }[]
  names: MoveMetaAilmentName[]
}

export interface MoveMetaAilmentName {
  /** @maxLength 200 */
  name: string
  language: LanguageSummary
}

export interface MoveMetaAilmentSummary {
  /** @maxLength 200 */
  name: string
  /** @format uri */
  url: string
}

export interface MoveMetaCategoryDescription {
  /** @maxLength 1000 */
  description?: string
  language: LanguageSummary
}

export interface MoveMetaCategoryDetail {
  id: number
  /** @maxLength 200 */
  name: string
  descriptions: MoveMetaCategoryDescription[]
  moves: {
    name: string
    /** @format uri */
    url: string
  }[]
}

export interface MoveMetaCategorySummary {
  /** @maxLength 200 */
  name: string
  /** @format uri */
  url: string
}

export interface MoveName {
  /** @maxLength 200 */
  name: string
  language: LanguageSummary
}

export interface MoveSummary {
  /** @maxLength 200 */
  name: string
  /** @format uri */
  url: string
}

export interface MoveTargetDescription {
  /** @maxLength 1000 */
  description?: string
  language: LanguageSummary
}

export interface MoveTargetDetail {
  id: number
  /** @maxLength 200 */
  name: string
  descriptions: MoveTargetDescription[]
  moves: MoveSummary[]
  names: MoveTargetName[]
}

export interface MoveTargetName {
  /** @maxLength 200 */
  name: string
  language: LanguageSummary
}

export interface MoveTargetSummary {
  /** @maxLength 200 */
  name: string
  /** @format uri */
  url: string
}

export interface NatureBattleStylePreference {
  low_hp_preference: number
  high_hp_preference: number
  move_battle_style: MoveBattleStyleSummary
}

export interface NatureDetail {
  id: number
  /** @maxLength 200 */
  name: string
  decreased_stat: StatSummary
  increased_stat: StatSummary
  likes_flavor: BerryFlavorSummary
  hates_flavor: BerryFlavorSummary
  berries: BerrySummary[]
  pokeathlon_stat_changes: {
    /** @format int32 */
    max_change: number
    pokeathlon_stat: {
      name: string
      /** @format uri */
      url: string
    }
  }[]
  move_battle_style_preferences: NatureBattleStylePreference[]
  names: NatureName[]
}

export interface NatureName {
  /** @maxLength 200 */
  name: string
  language: LanguageSummary
}

export interface NatureSummary {
  /** @maxLength 200 */
  name: string
  /** @format uri */
  url: string
}

export interface PaginatedAbilitySummaryList {
  /** @example 123 */
  count?: number
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=400&limit=100"
   */
  next?: string | null
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=200&limit=100"
   */
  previous?: string | null
  results?: AbilitySummary[]
}

export interface PaginatedBerryFirmnessSummaryList {
  /** @example 123 */
  count?: number
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=400&limit=100"
   */
  next?: string | null
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=200&limit=100"
   */
  previous?: string | null
  results?: BerryFirmnessSummary[]
}

export interface PaginatedBerryFlavorSummaryList {
  /** @example 123 */
  count?: number
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=400&limit=100"
   */
  next?: string | null
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=200&limit=100"
   */
  previous?: string | null
  results?: BerryFlavorSummary[]
}

export interface PaginatedBerrySummaryList {
  /** @example 123 */
  count?: number
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=400&limit=100"
   */
  next?: string | null
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=200&limit=100"
   */
  previous?: string | null
  results?: BerrySummary[]
}

export interface PaginatedCharacteristicSummaryList {
  /** @example 123 */
  count?: number
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=400&limit=100"
   */
  next?: string | null
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=200&limit=100"
   */
  previous?: string | null
  results?: CharacteristicSummary[]
}

export interface PaginatedContestEffectSummaryList {
  /** @example 123 */
  count?: number
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=400&limit=100"
   */
  next?: string | null
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=200&limit=100"
   */
  previous?: string | null
  results?: ContestEffectSummary[]
}

export interface PaginatedContestTypeSummaryList {
  /** @example 123 */
  count?: number
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=400&limit=100"
   */
  next?: string | null
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=200&limit=100"
   */
  previous?: string | null
  results?: ContestTypeSummary[]
}

export interface PaginatedEggGroupSummaryList {
  /** @example 123 */
  count?: number
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=400&limit=100"
   */
  next?: string | null
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=200&limit=100"
   */
  previous?: string | null
  results?: EggGroupSummary[]
}

export interface PaginatedEncounterConditionSummaryList {
  /** @example 123 */
  count?: number
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=400&limit=100"
   */
  next?: string | null
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=200&limit=100"
   */
  previous?: string | null
  results?: EncounterConditionSummary[]
}

export interface PaginatedEncounterConditionValueSummaryList {
  /** @example 123 */
  count?: number
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=400&limit=100"
   */
  next?: string | null
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=200&limit=100"
   */
  previous?: string | null
  results?: EncounterConditionValueSummary[]
}

export interface PaginatedEncounterMethodSummaryList {
  /** @example 123 */
  count?: number
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=400&limit=100"
   */
  next?: string | null
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=200&limit=100"
   */
  previous?: string | null
  results?: EncounterMethodSummary[]
}

export interface PaginatedEvolutionChainSummaryList {
  /** @example 123 */
  count?: number
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=400&limit=100"
   */
  next?: string | null
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=200&limit=100"
   */
  previous?: string | null
  results?: EvolutionChainSummary[]
}

export interface PaginatedEvolutionTriggerSummaryList {
  /** @example 123 */
  count?: number
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=400&limit=100"
   */
  next?: string | null
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=200&limit=100"
   */
  previous?: string | null
  results?: EvolutionTriggerSummary[]
}

export interface PaginatedGenderSummaryList {
  /** @example 123 */
  count?: number
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=400&limit=100"
   */
  next?: string | null
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=200&limit=100"
   */
  previous?: string | null
  results?: GenderSummary[]
}

export interface PaginatedGenerationSummaryList {
  /** @example 123 */
  count?: number
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=400&limit=100"
   */
  next?: string | null
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=200&limit=100"
   */
  previous?: string | null
  results?: GenerationSummary[]
}

export interface PaginatedGrowthRateSummaryList {
  /** @example 123 */
  count?: number
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=400&limit=100"
   */
  next?: string | null
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=200&limit=100"
   */
  previous?: string | null
  results?: GrowthRateSummary[]
}

export interface PaginatedItemAttributeSummaryList {
  /** @example 123 */
  count?: number
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=400&limit=100"
   */
  next?: string | null
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=200&limit=100"
   */
  previous?: string | null
  results?: ItemAttributeSummary[]
}

export interface PaginatedItemCategorySummaryList {
  /** @example 123 */
  count?: number
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=400&limit=100"
   */
  next?: string | null
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=200&limit=100"
   */
  previous?: string | null
  results?: ItemCategorySummary[]
}

export interface PaginatedItemFlingEffectSummaryList {
  /** @example 123 */
  count?: number
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=400&limit=100"
   */
  next?: string | null
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=200&limit=100"
   */
  previous?: string | null
  results?: ItemFlingEffectSummary[]
}

export interface PaginatedItemPocketSummaryList {
  /** @example 123 */
  count?: number
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=400&limit=100"
   */
  next?: string | null
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=200&limit=100"
   */
  previous?: string | null
  results?: ItemPocketSummary[]
}

export interface PaginatedItemSummaryList {
  /** @example 123 */
  count?: number
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=400&limit=100"
   */
  next?: string | null
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=200&limit=100"
   */
  previous?: string | null
  results?: ItemSummary[]
}

export interface PaginatedLanguageSummaryList {
  /** @example 123 */
  count?: number
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=400&limit=100"
   */
  next?: string | null
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=200&limit=100"
   */
  previous?: string | null
  results?: LanguageSummary[]
}

export interface PaginatedLocationAreaSummaryList {
  /** @example 123 */
  count?: number
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=400&limit=100"
   */
  next?: string | null
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=200&limit=100"
   */
  previous?: string | null
  results?: LocationAreaSummary[]
}

export interface PaginatedLocationSummaryList {
  /** @example 123 */
  count?: number
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=400&limit=100"
   */
  next?: string | null
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=200&limit=100"
   */
  previous?: string | null
  results?: LocationSummary[]
}

export interface PaginatedMachineSummaryList {
  /** @example 123 */
  count?: number
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=400&limit=100"
   */
  next?: string | null
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=200&limit=100"
   */
  previous?: string | null
  results?: MachineSummary[]
}

export interface PaginatedMoveBattleStyleSummaryList {
  /** @example 123 */
  count?: number
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=400&limit=100"
   */
  next?: string | null
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=200&limit=100"
   */
  previous?: string | null
  results?: MoveBattleStyleSummary[]
}

export interface PaginatedMoveDamageClassSummaryList {
  /** @example 123 */
  count?: number
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=400&limit=100"
   */
  next?: string | null
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=200&limit=100"
   */
  previous?: string | null
  results?: MoveDamageClassSummary[]
}

export interface PaginatedMoveLearnMethodSummaryList {
  /** @example 123 */
  count?: number
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=400&limit=100"
   */
  next?: string | null
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=200&limit=100"
   */
  previous?: string | null
  results?: MoveLearnMethodSummary[]
}

export interface PaginatedMoveMetaAilmentSummaryList {
  /** @example 123 */
  count?: number
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=400&limit=100"
   */
  next?: string | null
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=200&limit=100"
   */
  previous?: string | null
  results?: MoveMetaAilmentSummary[]
}

export interface PaginatedMoveMetaCategorySummaryList {
  /** @example 123 */
  count?: number
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=400&limit=100"
   */
  next?: string | null
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=200&limit=100"
   */
  previous?: string | null
  results?: MoveMetaCategorySummary[]
}

export interface PaginatedMoveSummaryList {
  /** @example 123 */
  count?: number
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=400&limit=100"
   */
  next?: string | null
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=200&limit=100"
   */
  previous?: string | null
  results?: MoveSummary[]
}

export interface PaginatedMoveTargetSummaryList {
  /** @example 123 */
  count?: number
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=400&limit=100"
   */
  next?: string | null
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=200&limit=100"
   */
  previous?: string | null
  results?: MoveTargetSummary[]
}

export interface PaginatedNatureSummaryList {
  /** @example 123 */
  count?: number
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=400&limit=100"
   */
  next?: string | null
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=200&limit=100"
   */
  previous?: string | null
  results?: NatureSummary[]
}

export interface PaginatedPalParkAreaSummaryList {
  /** @example 123 */
  count?: number
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=400&limit=100"
   */
  next?: string | null
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=200&limit=100"
   */
  previous?: string | null
  results?: PalParkAreaSummary[]
}

export interface PaginatedPokeathlonStatSummaryList {
  /** @example 123 */
  count?: number
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=400&limit=100"
   */
  next?: string | null
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=200&limit=100"
   */
  previous?: string | null
  results?: PokeathlonStatSummary[]
}

export interface PaginatedPokedexSummaryList {
  /** @example 123 */
  count?: number
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=400&limit=100"
   */
  next?: string | null
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=200&limit=100"
   */
  previous?: string | null
  results?: PokedexSummary[]
}

export interface PaginatedPokemonColorSummaryList {
  /** @example 123 */
  count?: number
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=400&limit=100"
   */
  next?: string | null
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=200&limit=100"
   */
  previous?: string | null
  results?: PokemonColorSummary[]
}

export interface PaginatedPokemonFormSummaryList {
  /** @example 123 */
  count?: number
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=400&limit=100"
   */
  next?: string | null
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=200&limit=100"
   */
  previous?: string | null
  results?: PokemonFormSummary[]
}

export interface PaginatedPokemonHabitatSummaryList {
  /** @example 123 */
  count?: number
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=400&limit=100"
   */
  next?: string | null
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=200&limit=100"
   */
  previous?: string | null
  results?: PokemonHabitatSummary[]
}

export interface PaginatedPokemonShapeSummaryList {
  /** @example 123 */
  count?: number
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=400&limit=100"
   */
  next?: string | null
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=200&limit=100"
   */
  previous?: string | null
  results?: PokemonShapeSummary[]
}

export interface PaginatedPokemonSpeciesSummaryList {
  /** @example 123 */
  count?: number
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=400&limit=100"
   */
  next?: string | null
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=200&limit=100"
   */
  previous?: string | null
  results?: PokemonSpeciesSummary[]
}

export interface PaginatedPokemonSummaryList {
  /** @example 123 */
  count?: number
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=400&limit=100"
   */
  next?: string | null
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=200&limit=100"
   */
  previous?: string | null
  results?: PokemonSummary[]
}

export interface PaginatedRegionSummaryList {
  /** @example 123 */
  count?: number
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=400&limit=100"
   */
  next?: string | null
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=200&limit=100"
   */
  previous?: string | null
  results?: RegionSummary[]
}

export interface PaginatedStatSummaryList {
  /** @example 123 */
  count?: number
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=400&limit=100"
   */
  next?: string | null
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=200&limit=100"
   */
  previous?: string | null
  results?: StatSummary[]
}

export interface PaginatedSuperContestEffectSummaryList {
  /** @example 123 */
  count?: number
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=400&limit=100"
   */
  next?: string | null
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=200&limit=100"
   */
  previous?: string | null
  results?: SuperContestEffectSummary[]
}

export interface PaginatedTypeSummaryList {
  /** @example 123 */
  count?: number
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=400&limit=100"
   */
  next?: string | null
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=200&limit=100"
   */
  previous?: string | null
  results?: TypeSummary[]
}

export interface PaginatedVersionGroupSummaryList {
  /** @example 123 */
  count?: number
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=400&limit=100"
   */
  next?: string | null
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=200&limit=100"
   */
  previous?: string | null
  results?: VersionGroupSummary[]
}

export interface PaginatedVersionSummaryList {
  /** @example 123 */
  count?: number
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=400&limit=100"
   */
  next?: string | null
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?offset=200&limit=100"
   */
  previous?: string | null
  results?: VersionSummary[]
}

export interface PalParkAreaDetail {
  id: number
  /** @maxLength 200 */
  name: string
  names: PalParkAreaName[]
  pokemon_encounters: {
    /** @format int32 */
    base_score: number
    'pokemon-species': {
      name: string
      /** @format uri */
      url: string
    }
    /** @format int32 */
    rate: number
  }[]
}

export interface PalParkAreaName {
  /** @maxLength 200 */
  name: string
  language: LanguageSummary
}

export interface PalParkAreaSummary {
  /** @maxLength 200 */
  name: string
  /** @format uri */
  url: string
}

export interface PokeathlonStatDetail {
  id: number
  /** @maxLength 200 */
  name: string
  affecting_natures: {
    decrease: {
      /**
       * @format int32
       * @max -1
       */
      max_change: number
      nature: {
        name: string
        /** @format uri */
        url: string
      }
    }[]
    increase: {
      /**
       * @format int32
       * @min 1
       */
      max_change: number
      nature: {
        name: string
        /** @format uri */
        url: string
      }
    }[]
  }
  names: PokeathlonStatName[]
}

export interface PokeathlonStatName {
  /** @maxLength 200 */
  name: string
  language: LanguageSummary
}

export interface PokeathlonStatSummary {
  /** @maxLength 200 */
  name: string
  /** @format uri */
  url: string
}

export interface PokedexDescription {
  /** @maxLength 1000 */
  description?: string
  language: LanguageSummary
}

export interface PokedexDetail {
  id: number
  /** @maxLength 200 */
  name: string
  is_main_series?: boolean
  descriptions: PokedexDescription[]
  names: PokedexName[]
  pokemon_entries: {
    /** @format int32 */
    entry_number: number
    pokemon_species: {
      name: string
      /** @format uri */
      url: string
    }
  }[]
  region: RegionSummary
  version_groups: {
    name: string
    /** @format uri */
    url: string
  }[]
}

export interface PokedexName {
  /** @maxLength 200 */
  name: string
  language: LanguageSummary
}

export interface PokedexSummary {
  /** @maxLength 200 */
  name: string
  /** @format uri */
  url: string
}

export interface PokemonColorDetail {
  id: number
  /** @maxLength 200 */
  name: string
  names: PokemonColorName[]
  pokemon_species: PokemonSpeciesSummary[]
}

export interface PokemonColorName {
  /** @maxLength 200 */
  name: string
  language: LanguageSummary
}

export interface PokemonColorSummary {
  /** @maxLength 200 */
  name: string
  /** @format uri */
  url: string
}

export interface PokemonDetail {
  id: number
  /** @maxLength 200 */
  name: string
  base_experience?: number | null
  height?: number | null
  is_default?: boolean
  order?: number | null
  weight?: number | null
  abilities: {
    ability: {
      name: string
      /** @format uri */
      url: string
    }
    is_hidden: boolean
    /** @format int32 */
    slot: number
  }[]
  past_abilities: {
    abilities: {
      ability: {
        name: string
        /** @format uri */
        url: string
      }
      is_hidden: boolean
      /** @format int32 */
      slot: number
    }[]
    generation: {
      name: string
      /** @format uri */
      url: string
    }
  }[]
  forms: PokemonFormSummary[]
  game_indices: PokemonGameIndex[]
  held_items: {
    item: {
      name: string
      /** @format uri */
      url: string
    }
    version_details: {
      /** @format int32 */
      rarity: number
      version: {
        name: string
        /** @format uri */
        url: string
      }
    }[]
  }[]
  location_area_encounters: string
  moves: {
    move: {
      name: string
      /** @format uri */
      url: string
    }
    version_group_details: {
      /** @format int32 */
      level_learned_at: number
      move_learn_method: {
        name: string
        /** @format uri */
        url: string
      }
      version_group: {
        name: string
        /** @format uri */
        url: string
      }
    }[]
  }[]
  species: PokemonSpeciesSummary
  sprites: {
    /** @format uri */
    front_default?: string
    [key: string]: any
  }
  cries: {
    /** @format uri */
    latest: string
    /** @format uri */
    legacy: string
  }
  stats: PokemonStat[]
  types: {
    /** @format int32 */
    slot: number
    type: {
      name: string
      /** @format uri */
      url: string
    }
  }[]
  past_types: {
    generation: {
      name: string
      /** @format uri */
      url: string
    }
    types: {
      /** @format int32 */
      slot: number
      type: {
        name: string
        /** @format uri */
        url: string
      }
    }[]
  }[]
}

export interface PokemonDexEntry {
  entry_number: number
  pokedex: PokedexSummary
}

export interface PokemonFormDetail {
  id: number
  /** @maxLength 200 */
  name: string
  order?: number | null
  form_order?: number | null
  is_default?: boolean
  is_battle_only?: boolean
  is_mega?: boolean
  /** @maxLength 30 */
  form_name: string
  pokemon: PokemonSummary
  sprites: {
    /** @format uri */
    default?: string
    [key: string]: any
  }
  version_group: VersionGroupSummary
  form_names: {
    language: {
      name: string
      /** @format uri */
      url: string
    }
    name: string
  }[]
  names: {
    language: {
      name: string
      /** @format uri */
      url: string
    }
    name: string
  }[]
  types: {
    /** @format int32 */
    slot: number
    type: {
      name: string
      /** @format uri */
      url: string
    }
  }[]
}

export interface PokemonFormSummary {
  /** @maxLength 200 */
  name: string
  /** @format uri */
  url: string
}

export interface PokemonGameIndex {
  game_index: number
  version: VersionSummary
}

export interface PokemonHabitatDetail {
  id: number
  /** @maxLength 200 */
  name: string
  names: PokemonHabitatName[]
  pokemon_species: PokemonSpeciesSummary[]
}

export interface PokemonHabitatName {
  /** @maxLength 200 */
  name: string
  language: LanguageSummary
}

export interface PokemonHabitatSummary {
  /** @maxLength 200 */
  name: string
  /** @format uri */
  url: string
}

export interface PokemonShapeDetail {
  id: number
  /** @maxLength 200 */
  name: string
  awesome_names: {
    awesome_name: string
    language: {
      name: string
      /** @format uri */
      url: string
    }
  }[]
  names: {
    /** @format uri */
    url: string
    name: string
  }[]
  pokemon_species: PokemonSpeciesSummary[]
}

export interface PokemonShapeSummary {
  /** @maxLength 200 */
  name: string
  /** @format uri */
  url: string
}

export interface PokemonSpeciesDescription {
  /** @maxLength 1000 */
  description?: string
  language: LanguageSummary
}

export interface PokemonSpeciesDetail {
  id: number
  /** @maxLength 200 */
  name: string
  order?: number | null
  gender_rate?: number | null
  capture_rate?: number | null
  base_happiness?: number | null
  is_baby?: boolean
  is_legendary?: boolean
  is_mythical?: boolean
  hatch_counter?: number | null
  has_gender_differences?: boolean
  forms_switchable?: boolean
  growth_rate: GrowthRateSummary
  pokedex_numbers: PokemonDexEntry[]
  egg_groups: {
    name: string
    /** @format uri */
    url: string
  }[]
  color: PokemonColorSummary
  shape: PokemonShapeSummary
  evolves_from_species: PokemonSpeciesSummary
  evolution_chain: EvolutionChainSummary
  habitat: PokemonHabitatSummary
  generation: GenerationSummary
  names: {
    language: {
      name: string
      /** @format uri */
      url: string
    }
    name: string
  }[]
  pal_park_encounters: {
    area: {
      name: string
      /** @format uri */
      url: string
    }
    /** @format int32 */
    base_score: number
    /** @format int32 */
    rate: number
  }[]
  form_descriptions: PokemonSpeciesDescription[]
  flavor_text_entries: PokemonSpeciesFlavorText[]
  genera: {
    genus: string
    language: {
      name: string
      /** @format uri */
      url: string
    }
  }[]
  varieties: {
    is_default: boolean
    pokemon: {
      name: string
      /** @format uri */
      url: string
    }
  }[]
}

export interface PokemonSpeciesFlavorText {
  flavor_text: string
  language: LanguageSummary
  version: VersionSummary
}

export interface PokemonSpeciesSummary {
  /** @maxLength 200 */
  name: string
  /** @format uri */
  url: string
}

export interface PokemonStat {
  base_stat: number
  effort: number
  stat: StatSummary
}

export interface PokemonSummary {
  /** @maxLength 200 */
  name: string
  /** @format uri */
  url: string
}

export interface RegionDetail {
  id: number
  /** @maxLength 200 */
  name: string
  locations: LocationSummary[]
  main_generation: GenerationSummary
  names: RegionName[]
  pokedexes: PokedexSummary[]
  version_groups: {
    name: string
    /** @format uri */
    url: string
  }[]
}

export interface RegionName {
  /** @maxLength 200 */
  name: string
  language: LanguageSummary
}

export interface RegionSummary {
  /** @maxLength 200 */
  name: string
  /** @format uri */
  url: string
}

export interface StatDetail {
  id: number
  /** @maxLength 200 */
  name: string
  game_index: number
  is_battle_only?: boolean
  affecting_moves: {
    increase: {
      /** @format int32 */
      change: number
      move: {
        name: string
        /** @format uri */
        url: string
      }
    }[]
    decrease: {
      /** @format int32 */
      change: number
      move: {
        name: string
        /** @format uri */
        url: string
      }
    }[]
  }
  affecting_natures: {
    increase: {
      name: string
      /** @format uri */
      url: string
    }[]
    decrease: {
      name: string
      /** @format uri */
      url: string
    }[]
  }
  characteristics: CharacteristicSummary[]
  move_damage_class: MoveDamageClassSummary
  names: StatName[]
}

export interface StatName {
  /** @maxLength 200 */
  name: string
  language: LanguageSummary
}

export interface StatSummary {
  /** @maxLength 200 */
  name: string
  /** @format uri */
  url: string
}

export interface SuperContestEffectDetail {
  id: number
  appeal: number
  flavor_text_entries: SuperContestEffectFlavorText[]
  moves: MoveSummary[]
}

export interface SuperContestEffectFlavorText {
  /** @maxLength 500 */
  flavor_text: string
  language: LanguageSummary
}

export interface SuperContestEffectSummary {
  /** @format uri */
  url: string
}

/** Serializer for the Type resource */
export interface TypeDetail {
  id: number
  /** @maxLength 200 */
  name: string
  damage_relations: {
    no_damage_to: {
      name: string
      /** @format uri */
      url: string
    }[]
    half_damage_to: {
      name: string
      /** @format uri */
      url: string
    }[]
    double_damage_to: {
      name: string
      /** @format uri */
      url: string
    }[]
    no_damage_from: {
      name: string
      /** @format uri */
      url: string
    }[]
    half_damage_from: {
      name: string
      /** @format uri */
      url: string
    }[]
    double_damage_from: {
      name: string
      /** @format uri */
      url: string
    }[]
  }
  past_damage_relations: {
    generation: {
      name: string
      /** @format uri */
      url: string
    }
    damage_relations: {
      no_damage_to: {
        name: string
        /** @format uri */
        url: string
      }[]
      half_damage_to: {
        name: string
        /** @format uri */
        url: string
      }[]
      double_damage_to: {
        name: string
        /** @format uri */
        url: string
      }[]
      no_damage_from: {
        name: string
        /** @format uri */
        url: string
      }[]
      half_damage_from: {
        name: string
        /** @format uri */
        url: string
      }[]
      double_damage_from: {
        name: string
        /** @format uri */
        url: string
      }[]
    }
  }[]
  game_indices: TypeGameIndex[]
  generation: GenerationSummary
  move_damage_class: MoveDamageClassSummary
  names: AbilityName[]
  pokemon: {
    slot?: number
    pokemon?: {
      /** The name of the pokemon */
      name?: string
      /**
       * The URL to get more information about the pokemon
       * @format uri
       */
      url?: string
    }
  }[]
  moves: MoveSummary[]
  sprites: Record<
    string,
    Record<
      string,
      {
        /** @format uri */
        'name-icon'?: string
      }
    >
  >
}

export interface TypeGameIndex {
  game_index: number
  generation: GenerationSummary
}

export interface TypeSummary {
  /** @maxLength 200 */
  name: string
  /** @format uri */
  url: string
}

/**
 * Should have a link to Version Group info but the Circular
 * dependency and compilation order fight eachother and I'm
 * not sure how to add anything other than a hyperlink
 */
export interface VersionDetail {
  id: number
  /** @maxLength 200 */
  name: string
  names: VersionName[]
  version_group: VersionGroupSummary
}

export interface VersionGroupDetail {
  id: number
  /** @maxLength 200 */
  name: string
  order?: number | null
  generation: GenerationSummary
  move_learn_methods: {
    name: string
    /** @format uri */
    url: string
  }[]
  pokedexes: {
    name: string
    /** @format uri */
    url: string
  }[]
  regions: {
    name: string
    /** @format uri */
    url: string
  }[]
  versions: VersionSummary[]
}

export interface VersionGroupSummary {
  /** @maxLength 200 */
  name: string
  /** @format uri */
  url: string
}

export interface VersionName {
  /** @maxLength 200 */
  name: string
  language: LanguageSummary
}

export interface VersionSummary {
  /** @maxLength 200 */
  name: string
  /** @format uri */
  url: string
}

export type QueryParamsType = Record<string | number, any>
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean
  /** request path */
  path: string
  /** content type of request body */
  type?: ContentType
  /** query params */
  query?: QueryParamsType
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat
  /** request body */
  body?: unknown
  /** base url */
  baseUrl?: string
  /** request cancellation token */
  cancelToken?: CancelToken
}

export type RequestParams = Omit<
  FullRequestParams,
  'body' | 'method' | 'query' | 'path'
>

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string
  baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>
  securityWorker?: (
    securityData: SecurityDataType | null
  ) => Promise<RequestParams | void> | RequestParams | void
  customFetch?: typeof fetch
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
  extends Response {
  data: D
  error: E
}

type CancelToken = Symbol | string | number

export enum ContentType {
  Json = 'application/json',
  JsonApi = 'application/vnd.api+json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain'
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = 'https://pokeapi.co'
  private securityData: SecurityDataType | null = null
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker']
  private abortControllers = new Map<CancelToken, AbortController>()
  private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
    fetch(...fetchParams)

  private baseApiParams: RequestParams = {
    credentials: 'same-origin',
    headers: {},
    redirect: 'follow',
    referrerPolicy: 'no-referrer'
  }

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig)
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data
  }

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key)
    return `${encodedKey}=${encodeURIComponent(typeof value === 'number' ? value : `${value}`)}`
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key])
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key]
    return value.map((v: any) => this.encodeQueryParam(key, v)).join('&')
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {}
    const keys = Object.keys(query).filter(
      (key) => 'undefined' !== typeof query[key]
    )
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key)
      )
      .join('&')
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery)
    return queryString ? `?${queryString}` : ''
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === 'object' || typeof input === 'string')
        ? JSON.stringify(input)
        : input,
    [ContentType.JsonApi]: (input: any) =>
      input !== null && (typeof input === 'object' || typeof input === 'string')
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== 'string'
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: any) => {
      if (input instanceof FormData) {
        return input
      }

      return Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key]
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === 'object' && property !== null
              ? JSON.stringify(property)
              : `${property}`
        )
        return formData
      }, new FormData())
    },
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input)
  }

  protected mergeRequestParams(
    params1: RequestParams,
    params2?: RequestParams
  ): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {})
      }
    }
  }

  protected createAbortSignal = (
    cancelToken: CancelToken
  ): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken)
      if (abortController) {
        return abortController.signal
      }
      return void 0
    }

    const abortController = new AbortController()
    this.abortControllers.set(cancelToken, abortController)
    return abortController.signal
  }

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken)

    if (abortController) {
      abortController.abort()
      this.abortControllers.delete(cancelToken)
    }
  }

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {}
    const requestParams = this.mergeRequestParams(params, secureParams)
    const queryString = query && this.toQueryString(query)
    const payloadFormatter = this.contentFormatters[type || ContentType.Json]
    const responseFormat = format || requestParams.format

    return this.customFetch(
      `${baseUrl || this.baseUrl || ''}${path}${queryString ? `?${queryString}` : ''}`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData
            ? { 'Content-Type': type }
            : {})
        },
        signal:
          (cancelToken
            ? this.createAbortSignal(cancelToken)
            : requestParams.signal) || null,
        body:
          typeof body === 'undefined' || body === null
            ? null
            : payloadFormatter(body)
      }
    ).then(async (response) => {
      const r = response as HttpResponse<T, E>
      r.data = null as unknown as T
      r.error = null as unknown as E

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data
              } else {
                r.error = data
              }
              return r
            })
            .catch((e) => {
              r.error = e
              return r
            })

      if (cancelToken) {
        this.abortControllers.delete(cancelToken)
      }

      if (!response.ok) throw data
      return data
    })
  }
}

/**
 * @title PokéAPI
 * @version 2.7.0
 * @baseUrl https://pokeapi.co
 * @externalDocs https://pokeapi.co/docs/v2
 *
 * All the Pokémon data you'll ever need in one place, easily accessible through a modern free open-source RESTful API.
 *
 * ## What is this?
 *
 * This is a full RESTful API linked to an extensive database detailing everything about the Pokémon main game series.
 *
 * We've covered everything from Pokémon to Berry Flavors.
 *
 * ## Where do I start?
 *
 * We have awesome [documentation](https://pokeapi.co/docs/v2) on how to use this API. It takes minutes to get started.
 *
 * This API will always be publicly available and will never require any extensive setup process to consume.
 *
 * Created by [**Paul Hallett**](https://github.com/phalt) and other [**PokéAPI contributors***](https://github.com/PokeAPI/pokeapi#contributing) around the world. Pokémon and Pokémon character names are trademarks of Nintendo.
 *
 */
export class Api<
  SecurityDataType extends unknown
> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * @description Abilities provide passive effects for Pokémon in battle or in the overworld. Pokémon have multiple possible abilities but can have only one ability at a time. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Ability) for greater detail.
     *
     * @tags pokemon
     * @name ApiV2AbilityList
     * @request GET:/api/v2/ability/
     * @secure
     */
    apiV2AbilityList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number
        /** The initial index from which to return the results. */
        offset?: number
        /**
         * > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
         * Case-insensitive query applied on the `name` property.
         */
        q?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<PaginatedAbilitySummaryList, any>({
        path: `/api/v2/ability/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Abilities provide passive effects for Pokémon in battle or in the overworld. Pokémon have multiple possible abilities but can have only one ability at a time. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Ability) for greater detail.
     *
     * @tags pokemon
     * @name ApiV2AbilityRetrieve
     * @request GET:/api/v2/ability/{id}/
     * @secure
     */
    apiV2AbilityRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<AbilityDetail, any>({
        path: `/api/v2/ability/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Berries are small fruits that can provide HP and status condition restoration, stat enhancement, and even damage negation when eaten by Pokémon. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Berry) for greater detail.
     *
     * @tags berries
     * @name ApiV2BerryList
     * @summary List berries
     * @request GET:/api/v2/berry/
     * @secure
     */
    apiV2BerryList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number
        /** The initial index from which to return the results. */
        offset?: number
        /**
         * > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
         * Case-insensitive query applied on the `name` property.
         */
        q?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<PaginatedBerrySummaryList, any>({
        path: `/api/v2/berry/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Berries are small fruits that can provide HP and status condition restoration, stat enhancement, and even damage negation when eaten by Pokémon. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Berry) for greater detail.
     *
     * @tags berries
     * @name ApiV2BerryRetrieve
     * @summary Get a berry
     * @request GET:/api/v2/berry/{id}/
     * @secure
     */
    apiV2BerryRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<BerryDetail, any>({
        path: `/api/v2/berry/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Berries can be soft or hard. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Category:Berries_by_firmness) for greater detail.
     *
     * @tags berries
     * @name ApiV2BerryFirmnessList
     * @summary List berry firmness
     * @request GET:/api/v2/berry-firmness/
     * @secure
     */
    apiV2BerryFirmnessList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number
        /** The initial index from which to return the results. */
        offset?: number
        /**
         * > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
         * Case-insensitive query applied on the `name` property.
         */
        q?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<PaginatedBerryFirmnessSummaryList, any>({
        path: `/api/v2/berry-firmness/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Berries can be soft or hard. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Category:Berries_by_firmness) for greater detail.
     *
     * @tags berries
     * @name ApiV2BerryFirmnessRetrieve
     * @summary Get berry by firmness
     * @request GET:/api/v2/berry-firmness/{id}/
     * @secure
     */
    apiV2BerryFirmnessRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<BerryFirmnessDetail, any>({
        path: `/api/v2/berry-firmness/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Flavors determine whether a Pokémon will benefit or suffer from eating a berry based on their **nature**. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Flavor) for greater detail.
     *
     * @tags berries
     * @name ApiV2BerryFlavorList
     * @summary List berry flavors
     * @request GET:/api/v2/berry-flavor/
     * @secure
     */
    apiV2BerryFlavorList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number
        /** The initial index from which to return the results. */
        offset?: number
        /**
         * > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
         * Case-insensitive query applied on the `name` property.
         */
        q?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<PaginatedBerryFlavorSummaryList, any>({
        path: `/api/v2/berry-flavor/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Flavors determine whether a Pokémon will benefit or suffer from eating a berry based on their **nature**. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Flavor) for greater detail.
     *
     * @tags berries
     * @name ApiV2BerryFlavorRetrieve
     * @summary Get berries by flavor
     * @request GET:/api/v2/berry-flavor/{id}/
     * @secure
     */
    apiV2BerryFlavorRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<BerryFlavorDetail, any>({
        path: `/api/v2/berry-flavor/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Characteristics indicate which stat contains a Pokémon's highest IV. A Pokémon's Characteristic is determined by the remainder of its highest IV divided by 5 (gene_modulo). Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Characteristic) for greater detail.
     *
     * @tags pokemon
     * @name ApiV2CharacteristicList
     * @summary List charecterictics
     * @request GET:/api/v2/characteristic/
     * @secure
     */
    apiV2CharacteristicList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number
        /** The initial index from which to return the results. */
        offset?: number
        /**
         * > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
         * Case-insensitive query applied on the `name` property.
         */
        q?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<PaginatedCharacteristicSummaryList, any>({
        path: `/api/v2/characteristic/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Characteristics indicate which stat contains a Pokémon's highest IV. A Pokémon's Characteristic is determined by the remainder of its highest IV divided by 5 (gene_modulo). Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Characteristic) for greater detail.
     *
     * @tags pokemon
     * @name ApiV2CharacteristicRetrieve
     * @summary Get characteristic
     * @request GET:/api/v2/characteristic/{id}/
     * @secure
     */
    apiV2CharacteristicRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<CharacteristicDetail, any>({
        path: `/api/v2/characteristic/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Contest types are categories judges used to weigh a Pokémon's condition in Pokémon contests. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Contest_condition) for greater detail.
     *
     * @tags contests
     * @name ApiV2ContestTypeList
     * @summary List contest types
     * @request GET:/api/v2/contest-type/
     * @secure
     */
    apiV2ContestTypeList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number
        /** The initial index from which to return the results. */
        offset?: number
        /**
         * > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
         * Case-insensitive query applied on the `name` property.
         */
        q?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<PaginatedContestTypeSummaryList, any>({
        path: `/api/v2/contest-type/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Contest types are categories judges used to weigh a Pokémon's condition in Pokémon contests. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Contest_condition) for greater detail.
     *
     * @tags contests
     * @name ApiV2ContestTypeRetrieve
     * @summary Get contest type
     * @request GET:/api/v2/contest-type/{id}/
     * @secure
     */
    apiV2ContestTypeRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<ContestTypeDetail, any>({
        path: `/api/v2/contest-type/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Contest effects refer to the effects of moves when used in contests.
     *
     * @tags contests
     * @name ApiV2ContestEffectList
     * @summary List contest effects
     * @request GET:/api/v2/contest-effect/
     * @secure
     */
    apiV2ContestEffectList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number
        /** The initial index from which to return the results. */
        offset?: number
        /**
         * > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
         * Case-insensitive query applied on the `name` property.
         */
        q?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<PaginatedContestEffectSummaryList, any>({
        path: `/api/v2/contest-effect/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Contest effects refer to the effects of moves when used in contests.
     *
     * @tags contests
     * @name ApiV2ContestEffectRetrieve
     * @summary Get contest effect
     * @request GET:/api/v2/contest-effect/{id}/
     * @secure
     */
    apiV2ContestEffectRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<ContestEffectDetail, any>({
        path: `/api/v2/contest-effect/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Egg Groups are categories which determine which Pokémon are able to interbreed. Pokémon may belong to either one or two Egg Groups. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Egg_Group) for greater detail.
     *
     * @tags pokemon
     * @name ApiV2EggGroupList
     * @summary List egg groups
     * @request GET:/api/v2/egg-group/
     * @secure
     */
    apiV2EggGroupList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number
        /** The initial index from which to return the results. */
        offset?: number
        /**
         * > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
         * Case-insensitive query applied on the `name` property.
         */
        q?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<PaginatedEggGroupSummaryList, any>({
        path: `/api/v2/egg-group/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Egg Groups are categories which determine which Pokémon are able to interbreed. Pokémon may belong to either one or two Egg Groups. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Egg_Group) for greater detail.
     *
     * @tags pokemon
     * @name ApiV2EggGroupRetrieve
     * @summary Get egg group
     * @request GET:/api/v2/egg-group/{id}/
     * @secure
     */
    apiV2EggGroupRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<EggGroupDetail, any>({
        path: `/api/v2/egg-group/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Methods by which the player might can encounter Pokémon in the wild, e.g., walking in tall grass. Check out Bulbapedia for greater detail.
     *
     * @tags encounters
     * @name ApiV2EncounterMethodList
     * @summary List encounter methods
     * @request GET:/api/v2/encounter-method/
     * @secure
     */
    apiV2EncounterMethodList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number
        /** The initial index from which to return the results. */
        offset?: number
        /**
         * > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
         * Case-insensitive query applied on the `name` property.
         */
        q?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<PaginatedEncounterMethodSummaryList, any>({
        path: `/api/v2/encounter-method/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Methods by which the player might can encounter Pokémon in the wild, e.g., walking in tall grass. Check out Bulbapedia for greater detail.
     *
     * @tags encounters
     * @name ApiV2EncounterMethodRetrieve
     * @summary Get encounter method
     * @request GET:/api/v2/encounter-method/{id}/
     * @secure
     */
    apiV2EncounterMethodRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<EncounterMethodDetail, any>({
        path: `/api/v2/encounter-method/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Conditions which affect what pokemon might appear in the wild, e.g., day or night.
     *
     * @tags encounters
     * @name ApiV2EncounterConditionList
     * @summary List encounter conditions
     * @request GET:/api/v2/encounter-condition/
     * @secure
     */
    apiV2EncounterConditionList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number
        /** The initial index from which to return the results. */
        offset?: number
        /**
         * > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
         * Case-insensitive query applied on the `name` property.
         */
        q?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<PaginatedEncounterConditionSummaryList, any>({
        path: `/api/v2/encounter-condition/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Conditions which affect what pokemon might appear in the wild, e.g., day or night.
     *
     * @tags encounters
     * @name ApiV2EncounterConditionRetrieve
     * @summary Get encounter condition
     * @request GET:/api/v2/encounter-condition/{id}/
     * @secure
     */
    apiV2EncounterConditionRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<EncounterConditionDetail, any>({
        path: `/api/v2/encounter-condition/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Encounter condition values are the various states that an encounter condition can have, i.e., time of day can be either day or night.
     *
     * @tags encounters
     * @name ApiV2EncounterConditionValueList
     * @summary List encounter condition values
     * @request GET:/api/v2/encounter-condition-value/
     * @secure
     */
    apiV2EncounterConditionValueList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number
        /** The initial index from which to return the results. */
        offset?: number
        /**
         * > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
         * Case-insensitive query applied on the `name` property.
         */
        q?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<PaginatedEncounterConditionValueSummaryList, any>({
        path: `/api/v2/encounter-condition-value/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Encounter condition values are the various states that an encounter condition can have, i.e., time of day can be either day or night.
     *
     * @tags encounters
     * @name ApiV2EncounterConditionValueRetrieve
     * @summary Get encounter condition value
     * @request GET:/api/v2/encounter-condition-value/{id}/
     * @secure
     */
    apiV2EncounterConditionValueRetrieve: (
      id: string,
      params: RequestParams = {}
    ) =>
      this.request<EncounterConditionValueDetail, any>({
        path: `/api/v2/encounter-condition-value/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Evolution chains are essentially family trees. They start with the lowest stage within a family and detail evolution conditions for each as well as Pokémon they can evolve into up through the hierarchy.
     *
     * @tags evolution
     * @name ApiV2EvolutionChainList
     * @summary List evolution chains
     * @request GET:/api/v2/evolution-chain/
     * @secure
     */
    apiV2EvolutionChainList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number
        /** The initial index from which to return the results. */
        offset?: number
        /**
         * > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
         * Case-insensitive query applied on the `name` property.
         */
        q?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<PaginatedEvolutionChainSummaryList, any>({
        path: `/api/v2/evolution-chain/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Evolution chains are essentially family trees. They start with the lowest stage within a family and detail evolution conditions for each as well as Pokémon they can evolve into up through the hierarchy.
     *
     * @tags evolution
     * @name ApiV2EvolutionChainRetrieve
     * @summary Get evolution chain
     * @request GET:/api/v2/evolution-chain/{id}/
     * @secure
     */
    apiV2EvolutionChainRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<EvolutionChainDetail, any>({
        path: `/api/v2/evolution-chain/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Evolution triggers are the events and conditions that cause a Pokémon to evolve. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Methods_of_evolution) for greater detail.
     *
     * @tags evolution
     * @name ApiV2EvolutionTriggerList
     * @summary List evolution triggers
     * @request GET:/api/v2/evolution-trigger/
     * @secure
     */
    apiV2EvolutionTriggerList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number
        /** The initial index from which to return the results. */
        offset?: number
        /**
         * > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
         * Case-insensitive query applied on the `name` property.
         */
        q?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<PaginatedEvolutionTriggerSummaryList, any>({
        path: `/api/v2/evolution-trigger/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Evolution triggers are the events and conditions that cause a Pokémon to evolve. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Methods_of_evolution) for greater detail.
     *
     * @tags evolution
     * @name ApiV2EvolutionTriggerRetrieve
     * @summary Get evolution trigger
     * @request GET:/api/v2/evolution-trigger/{id}/
     * @secure
     */
    apiV2EvolutionTriggerRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<EvolutionTriggerDetail, any>({
        path: `/api/v2/evolution-trigger/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description A generation is a grouping of the Pokémon games that separates them based on the Pokémon they include. In each generation, a new set of Pokémon, Moves, Abilities and Types that did not exist in the previous generation are released.
     *
     * @tags games
     * @name ApiV2GenerationList
     * @summary List genrations
     * @request GET:/api/v2/generation/
     * @secure
     */
    apiV2GenerationList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number
        /** The initial index from which to return the results. */
        offset?: number
        /**
         * > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
         * Case-insensitive query applied on the `name` property.
         */
        q?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<PaginatedGenerationSummaryList, any>({
        path: `/api/v2/generation/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description A generation is a grouping of the Pokémon games that separates them based on the Pokémon they include. In each generation, a new set of Pokémon, Moves, Abilities and Types that did not exist in the previous generation are released.
     *
     * @tags games
     * @name ApiV2GenerationRetrieve
     * @summary Get genration
     * @request GET:/api/v2/generation/{id}/
     * @secure
     */
    apiV2GenerationRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<GenerationDetail, any>({
        path: `/api/v2/generation/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Genders were introduced in Generation II for the purposes of breeding Pokémon but can also result in visual differences or even different evolutionary lines. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Gender) for greater detail.
     *
     * @tags pokemon
     * @name ApiV2GenderList
     * @summary List genders
     * @request GET:/api/v2/gender/
     * @secure
     */
    apiV2GenderList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number
        /** The initial index from which to return the results. */
        offset?: number
        /**
         * > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
         * Case-insensitive query applied on the `name` property.
         */
        q?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<PaginatedGenderSummaryList, any>({
        path: `/api/v2/gender/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Genders were introduced in Generation II for the purposes of breeding Pokémon but can also result in visual differences or even different evolutionary lines. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Gender) for greater detail.
     *
     * @tags pokemon
     * @name ApiV2GenderRetrieve
     * @summary Get gender
     * @request GET:/api/v2/gender/{id}/
     * @secure
     */
    apiV2GenderRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<GenderDetail, any>({
        path: `/api/v2/gender/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Growth rates are the speed with which Pokémon gain levels through experience. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Experience) for greater detail.
     *
     * @tags pokemon
     * @name ApiV2GrowthRateList
     * @summary List growth rates
     * @request GET:/api/v2/growth-rate/
     * @secure
     */
    apiV2GrowthRateList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number
        /** The initial index from which to return the results. */
        offset?: number
        /**
         * > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
         * Case-insensitive query applied on the `name` property.
         */
        q?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<PaginatedGrowthRateSummaryList, any>({
        path: `/api/v2/growth-rate/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Growth rates are the speed with which Pokémon gain levels through experience. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Experience) for greater detail.
     *
     * @tags pokemon
     * @name ApiV2GrowthRateRetrieve
     * @summary Get growth rate
     * @request GET:/api/v2/growth-rate/{id}/
     * @secure
     */
    apiV2GrowthRateRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<GrowthRateDetail, any>({
        path: `/api/v2/growth-rate/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description An item is an object in the games which the player can pick up, keep in their bag, and use in some manner. They have various uses, including healing, powering up, helping catch Pokémon, or to access a new area.
     *
     * @tags items
     * @name ApiV2ItemList
     * @summary List items
     * @request GET:/api/v2/item/
     * @secure
     */
    apiV2ItemList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number
        /** The initial index from which to return the results. */
        offset?: number
        /**
         * > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
         * Case-insensitive query applied on the `name` property.
         */
        q?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<PaginatedItemSummaryList, any>({
        path: `/api/v2/item/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description An item is an object in the games which the player can pick up, keep in their bag, and use in some manner. They have various uses, including healing, powering up, helping catch Pokémon, or to access a new area.
     *
     * @tags items
     * @name ApiV2ItemRetrieve
     * @summary Get item
     * @request GET:/api/v2/item/{id}/
     * @secure
     */
    apiV2ItemRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<ItemDetail, any>({
        path: `/api/v2/item/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Item categories determine where items will be placed in the players bag.
     *
     * @tags items
     * @name ApiV2ItemCategoryList
     * @summary List item categories
     * @request GET:/api/v2/item-category/
     * @secure
     */
    apiV2ItemCategoryList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number
        /** The initial index from which to return the results. */
        offset?: number
        /**
         * > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
         * Case-insensitive query applied on the `name` property.
         */
        q?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<PaginatedItemCategorySummaryList, any>({
        path: `/api/v2/item-category/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Item categories determine where items will be placed in the players bag.
     *
     * @tags items
     * @name ApiV2ItemCategoryRetrieve
     * @summary Get item category
     * @request GET:/api/v2/item-category/{id}/
     * @secure
     */
    apiV2ItemCategoryRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<ItemCategoryDetail, any>({
        path: `/api/v2/item-category/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Item attributes define particular aspects of items, e.g."usable in battle" or "consumable".
     *
     * @tags items
     * @name ApiV2ItemAttributeList
     * @summary List item attributes
     * @request GET:/api/v2/item-attribute/
     * @secure
     */
    apiV2ItemAttributeList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number
        /** The initial index from which to return the results. */
        offset?: number
        /**
         * > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
         * Case-insensitive query applied on the `name` property.
         */
        q?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<PaginatedItemAttributeSummaryList, any>({
        path: `/api/v2/item-attribute/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Item attributes define particular aspects of items, e.g."usable in battle" or "consumable".
     *
     * @tags items
     * @name ApiV2ItemAttributeRetrieve
     * @summary Get item attribute
     * @request GET:/api/v2/item-attribute/{id}/
     * @secure
     */
    apiV2ItemAttributeRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<ItemAttributeDetail, any>({
        path: `/api/v2/item-attribute/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description The various effects of the move"Fling" when used with different items.
     *
     * @tags items
     * @name ApiV2ItemFlingEffectList
     * @summary List item fling effects
     * @request GET:/api/v2/item-fling-effect/
     * @secure
     */
    apiV2ItemFlingEffectList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number
        /** The initial index from which to return the results. */
        offset?: number
        /**
         * > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
         * Case-insensitive query applied on the `name` property.
         */
        q?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<PaginatedItemFlingEffectSummaryList, any>({
        path: `/api/v2/item-fling-effect/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description The various effects of the move"Fling" when used with different items.
     *
     * @tags items
     * @name ApiV2ItemFlingEffectRetrieve
     * @summary Get item fling effect
     * @request GET:/api/v2/item-fling-effect/{id}/
     * @secure
     */
    apiV2ItemFlingEffectRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<ItemFlingEffectDetail, any>({
        path: `/api/v2/item-fling-effect/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Pockets within the players bag used for storing items by category.
     *
     * @tags items
     * @name ApiV2ItemPocketList
     * @summary List item pockets
     * @request GET:/api/v2/item-pocket/
     * @secure
     */
    apiV2ItemPocketList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number
        /** The initial index from which to return the results. */
        offset?: number
        /**
         * > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
         * Case-insensitive query applied on the `name` property.
         */
        q?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<PaginatedItemPocketSummaryList, any>({
        path: `/api/v2/item-pocket/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Pockets within the players bag used for storing items by category.
     *
     * @tags items
     * @name ApiV2ItemPocketRetrieve
     * @summary Get item pocket
     * @request GET:/api/v2/item-pocket/{id}/
     * @secure
     */
    apiV2ItemPocketRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<ItemPocketDetail, any>({
        path: `/api/v2/item-pocket/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Languages for translations of API resource information.
     *
     * @tags utility
     * @name ApiV2LanguageList
     * @summary List languages
     * @request GET:/api/v2/language/
     * @secure
     */
    apiV2LanguageList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number
        /** The initial index from which to return the results. */
        offset?: number
        /**
         * > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
         * Case-insensitive query applied on the `name` property.
         */
        q?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<PaginatedLanguageSummaryList, any>({
        path: `/api/v2/language/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Languages for translations of API resource information.
     *
     * @tags utility
     * @name ApiV2LanguageRetrieve
     * @summary Get language
     * @request GET:/api/v2/language/{id}/
     * @secure
     */
    apiV2LanguageRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<LanguageDetail, any>({
        path: `/api/v2/language/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Locations that can be visited within the games. Locations make up sizable portions of regions, like cities or routes.
     *
     * @tags location
     * @name ApiV2LocationList
     * @summary List locations
     * @request GET:/api/v2/location/
     * @secure
     */
    apiV2LocationList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number
        /** The initial index from which to return the results. */
        offset?: number
        /**
         * > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
         * Case-insensitive query applied on the `name` property.
         */
        q?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<PaginatedLocationSummaryList, any>({
        path: `/api/v2/location/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Locations that can be visited within the games. Locations make up sizable portions of regions, like cities or routes.
     *
     * @tags location
     * @name ApiV2LocationRetrieve
     * @summary Get location
     * @request GET:/api/v2/location/{id}/
     * @secure
     */
    apiV2LocationRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<LocationDetail, any>({
        path: `/api/v2/location/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Location areas are sections of areas, such as floors in a building or cave. Each area has its own set of possible Pokémon encounters.
     *
     * @tags location
     * @name ApiV2LocationAreaList
     * @summary List location areas
     * @request GET:/api/v2/location-area/
     * @secure
     */
    apiV2LocationAreaList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number
        /** The initial index from which to return the results. */
        offset?: number
      },
      params: RequestParams = {}
    ) =>
      this.request<PaginatedLocationAreaSummaryList, any>({
        path: `/api/v2/location-area/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Location areas are sections of areas, such as floors in a building or cave. Each area has its own set of possible Pokémon encounters.
     *
     * @tags location
     * @name ApiV2LocationAreaRetrieve
     * @summary Get location area
     * @request GET:/api/v2/location-area/{id}/
     * @secure
     */
    apiV2LocationAreaRetrieve: (id: number, params: RequestParams = {}) =>
      this.request<LocationAreaDetail, any>({
        path: `/api/v2/location-area/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Machines are the representation of items that teach moves to Pokémon. They vary from version to version, so it is not certain that one specific TM or HM corresponds to a single Machine.
     *
     * @tags machines
     * @name ApiV2MachineList
     * @summary List machines
     * @request GET:/api/v2/machine/
     * @secure
     */
    apiV2MachineList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number
        /** The initial index from which to return the results. */
        offset?: number
        /**
         * > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
         * Case-insensitive query applied on the `name` property.
         */
        q?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<PaginatedMachineSummaryList, any>({
        path: `/api/v2/machine/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Machines are the representation of items that teach moves to Pokémon. They vary from version to version, so it is not certain that one specific TM or HM corresponds to a single Machine.
     *
     * @tags machines
     * @name ApiV2MachineRetrieve
     * @summary Get machine
     * @request GET:/api/v2/machine/{id}/
     * @secure
     */
    apiV2MachineRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<MachineDetail, any>({
        path: `/api/v2/machine/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Moves are the skills of Pokémon in battle. In battle, a Pokémon uses one move each turn. Some moves (including those learned by Hidden Machine) can be used outside of battle as well, usually for the purpose of removing obstacles or exploring new areas.
     *
     * @tags moves
     * @name ApiV2MoveList
     * @summary List moves
     * @request GET:/api/v2/move/
     * @secure
     */
    apiV2MoveList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number
        /** The initial index from which to return the results. */
        offset?: number
        /**
         * > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
         * Case-insensitive query applied on the `name` property.
         */
        q?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<PaginatedMoveSummaryList, any>({
        path: `/api/v2/move/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Moves are the skills of Pokémon in battle. In battle, a Pokémon uses one move each turn. Some moves (including those learned by Hidden Machine) can be used outside of battle as well, usually for the purpose of removing obstacles or exploring new areas.
     *
     * @tags moves
     * @name ApiV2MoveRetrieve
     * @summary Get move
     * @request GET:/api/v2/move/{id}/
     * @secure
     */
    apiV2MoveRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<MoveDetail, any>({
        path: `/api/v2/move/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Move Ailments are status conditions caused by moves used during battle. See [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Status_condition) for greater detail.
     *
     * @tags moves
     * @name ApiV2MoveAilmentList
     * @summary List move meta ailments
     * @request GET:/api/v2/move-ailment/
     * @secure
     */
    apiV2MoveAilmentList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number
        /** The initial index from which to return the results. */
        offset?: number
        /**
         * > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
         * Case-insensitive query applied on the `name` property.
         */
        q?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<PaginatedMoveMetaAilmentSummaryList, any>({
        path: `/api/v2/move-ailment/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Move Ailments are status conditions caused by moves used during battle. See [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Status_condition) for greater detail.
     *
     * @tags moves
     * @name ApiV2MoveAilmentRetrieve
     * @summary Get move meta ailment
     * @request GET:/api/v2/move-ailment/{id}/
     * @secure
     */
    apiV2MoveAilmentRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<MoveMetaAilmentDetail, any>({
        path: `/api/v2/move-ailment/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Styles of moves when used in the Battle Palace. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Battle_Frontier_(Generation_III)) for greater detail.
     *
     * @tags moves
     * @name ApiV2MoveBattleStyleList
     * @summary List move battle styles
     * @request GET:/api/v2/move-battle-style/
     * @secure
     */
    apiV2MoveBattleStyleList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number
        /** The initial index from which to return the results. */
        offset?: number
        /**
         * > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
         * Case-insensitive query applied on the `name` property.
         */
        q?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<PaginatedMoveBattleStyleSummaryList, any>({
        path: `/api/v2/move-battle-style/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Styles of moves when used in the Battle Palace. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Battle_Frontier_(Generation_III)) for greater detail.
     *
     * @tags moves
     * @name ApiV2MoveBattleStyleRetrieve
     * @summary Get move battle style
     * @request GET:/api/v2/move-battle-style/{id}/
     * @secure
     */
    apiV2MoveBattleStyleRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<MoveBattleStyleDetail, any>({
        path: `/api/v2/move-battle-style/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Very general categories that loosely group move effects.
     *
     * @tags moves
     * @name ApiV2MoveCategoryList
     * @summary List move meta categories
     * @request GET:/api/v2/move-category/
     * @secure
     */
    apiV2MoveCategoryList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number
        /** The initial index from which to return the results. */
        offset?: number
        /**
         * > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
         * Case-insensitive query applied on the `name` property.
         */
        q?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<PaginatedMoveMetaCategorySummaryList, any>({
        path: `/api/v2/move-category/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Very general categories that loosely group move effects.
     *
     * @tags moves
     * @name ApiV2MoveCategoryRetrieve
     * @summary Get move meta category
     * @request GET:/api/v2/move-category/{id}/
     * @secure
     */
    apiV2MoveCategoryRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<MoveMetaCategoryDetail, any>({
        path: `/api/v2/move-category/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Damage classes moves can have, e.g. physical, special, or non-damaging.
     *
     * @tags pokemon
     * @name ApiV2MoveDamageClassList
     * @summary List move damage classes
     * @request GET:/api/v2/move-damage-class/
     * @secure
     */
    apiV2MoveDamageClassList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number
        /** The initial index from which to return the results. */
        offset?: number
        /**
         * > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
         * Case-insensitive query applied on the `name` property.
         */
        q?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<PaginatedMoveDamageClassSummaryList, any>({
        path: `/api/v2/move-damage-class/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Damage classes moves can have, e.g. physical, special, or non-damaging.
     *
     * @tags pokemon
     * @name ApiV2MoveDamageClassRetrieve
     * @summary Get move damage class
     * @request GET:/api/v2/move-damage-class/{id}/
     * @secure
     */
    apiV2MoveDamageClassRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<MoveDamageClassDetail, any>({
        path: `/api/v2/move-damage-class/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Methods by which Pokémon can learn moves.
     *
     * @tags moves
     * @name ApiV2MoveLearnMethodList
     * @summary List move learn methods
     * @request GET:/api/v2/move-learn-method/
     * @secure
     */
    apiV2MoveLearnMethodList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number
        /** The initial index from which to return the results. */
        offset?: number
        /**
         * > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
         * Case-insensitive query applied on the `name` property.
         */
        q?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<PaginatedMoveLearnMethodSummaryList, any>({
        path: `/api/v2/move-learn-method/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Methods by which Pokémon can learn moves.
     *
     * @tags moves
     * @name ApiV2MoveLearnMethodRetrieve
     * @summary Get move learn method
     * @request GET:/api/v2/move-learn-method/{id}/
     * @secure
     */
    apiV2MoveLearnMethodRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<MoveLearnMethodDetail, any>({
        path: `/api/v2/move-learn-method/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Targets moves can be directed at during battle. Targets can be Pokémon, environments or even other moves.
     *
     * @tags moves
     * @name ApiV2MoveTargetList
     * @summary List move targets
     * @request GET:/api/v2/move-target/
     * @secure
     */
    apiV2MoveTargetList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number
        /** The initial index from which to return the results. */
        offset?: number
        /**
         * > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
         * Case-insensitive query applied on the `name` property.
         */
        q?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<PaginatedMoveTargetSummaryList, any>({
        path: `/api/v2/move-target/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Targets moves can be directed at during battle. Targets can be Pokémon, environments or even other moves.
     *
     * @tags moves
     * @name ApiV2MoveTargetRetrieve
     * @summary Get move target
     * @request GET:/api/v2/move-target/{id}/
     * @secure
     */
    apiV2MoveTargetRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<MoveTargetDetail, any>({
        path: `/api/v2/move-target/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Natures influence how a Pokémon's stats grow. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Nature) for greater detail.
     *
     * @tags pokemon
     * @name ApiV2NatureList
     * @summary List natures
     * @request GET:/api/v2/nature/
     * @secure
     */
    apiV2NatureList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number
        /** The initial index from which to return the results. */
        offset?: number
        /**
         * > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
         * Case-insensitive query applied on the `name` property.
         */
        q?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<PaginatedNatureSummaryList, any>({
        path: `/api/v2/nature/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Natures influence how a Pokémon's stats grow. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Nature) for greater detail.
     *
     * @tags pokemon
     * @name ApiV2NatureRetrieve
     * @summary Get nature
     * @request GET:/api/v2/nature/{id}/
     * @secure
     */
    apiV2NatureRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<NatureDetail, any>({
        path: `/api/v2/nature/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Areas used for grouping Pokémon encounters in Pal Park. They're like habitats that are specific to Pal Park.
     *
     * @tags location
     * @name ApiV2PalParkAreaList
     * @summary List pal park areas
     * @request GET:/api/v2/pal-park-area/
     * @secure
     */
    apiV2PalParkAreaList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number
        /** The initial index from which to return the results. */
        offset?: number
        /**
         * > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
         * Case-insensitive query applied on the `name` property.
         */
        q?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<PaginatedPalParkAreaSummaryList, any>({
        path: `/api/v2/pal-park-area/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Areas used for grouping Pokémon encounters in Pal Park. They're like habitats that are specific to Pal Park.
     *
     * @tags location
     * @name ApiV2PalParkAreaRetrieve
     * @summary Get pal park area
     * @request GET:/api/v2/pal-park-area/{id}/
     * @secure
     */
    apiV2PalParkAreaRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<PalParkAreaDetail, any>({
        path: `/api/v2/pal-park-area/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description A Pokédex is a handheld electronic encyclopedia device; one which is capable of recording and retaining information of the various Pokémon in a given region with the exception of the national dex and some smaller dexes related to portions of a region. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pokedex) for greater detail.
     *
     * @tags games
     * @name ApiV2PokedexList
     * @summary List pokedex
     * @request GET:/api/v2/pokedex/
     * @secure
     */
    apiV2PokedexList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number
        /** The initial index from which to return the results. */
        offset?: number
        /**
         * > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
         * Case-insensitive query applied on the `name` property.
         */
        q?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<PaginatedPokedexSummaryList, any>({
        path: `/api/v2/pokedex/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description A Pokédex is a handheld electronic encyclopedia device; one which is capable of recording and retaining information of the various Pokémon in a given region with the exception of the national dex and some smaller dexes related to portions of a region. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pokedex) for greater detail.
     *
     * @tags games
     * @name ApiV2PokedexRetrieve
     * @summary Get pokedex
     * @request GET:/api/v2/pokedex/{id}/
     * @secure
     */
    apiV2PokedexRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<PokedexDetail, any>({
        path: `/api/v2/pokedex/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Pokémon are the creatures that inhabit the world of the Pokémon games. They can be caught using Pokéballs and trained by battling with other Pokémon. Each Pokémon belongs to a specific species but may take on a variant which makes it differ from other Pokémon of the same species, such as base stats, available abilities and typings. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_(species)) for greater detail.
     *
     * @tags pokemon
     * @name ApiV2PokemonList
     * @summary List pokemon
     * @request GET:/api/v2/pokemon/
     * @secure
     */
    apiV2PokemonList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number
        /** The initial index from which to return the results. */
        offset?: number
        /**
         * > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
         * Case-insensitive query applied on the `name` property.
         */
        q?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<PaginatedPokemonSummaryList, any>({
        path: `/api/v2/pokemon/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Pokémon are the creatures that inhabit the world of the Pokémon games. They can be caught using Pokéballs and trained by battling with other Pokémon. Each Pokémon belongs to a specific species but may take on a variant which makes it differ from other Pokémon of the same species, such as base stats, available abilities and typings. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_(species)) for greater detail.
     *
     * @tags pokemon
     * @name ApiV2PokemonRetrieve
     * @summary Get pokemon
     * @request GET:/api/v2/pokemon/{id}/
     * @secure
     */
    apiV2PokemonRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<PokemonDetail, any>({
        path: `/api/v2/pokemon/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Colors used for sorting Pokémon in a Pokédex. The color listed in the Pokédex is usually the color most apparent or covering each Pokémon's body. No orange category exists; Pokémon that are primarily orange are listed as red or brown.
     *
     * @tags pokemon
     * @name ApiV2PokemonColorList
     * @summary List pokemon colors
     * @request GET:/api/v2/pokemon-color/
     * @secure
     */
    apiV2PokemonColorList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number
        /** The initial index from which to return the results. */
        offset?: number
        /**
         * > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
         * Case-insensitive query applied on the `name` property.
         */
        q?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<PaginatedPokemonColorSummaryList, any>({
        path: `/api/v2/pokemon-color/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Colors used for sorting Pokémon in a Pokédex. The color listed in the Pokédex is usually the color most apparent or covering each Pokémon's body. No orange category exists; Pokémon that are primarily orange are listed as red or brown.
     *
     * @tags pokemon
     * @name ApiV2PokemonColorRetrieve
     * @summary Get pokemon color
     * @request GET:/api/v2/pokemon-color/{id}/
     * @secure
     */
    apiV2PokemonColorRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<PokemonColorDetail, any>({
        path: `/api/v2/pokemon-color/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Some Pokémon may appear in one of multiple, visually different forms. These differences are purely cosmetic. For variations within a Pokémon species, which do differ in more than just visuals, the 'Pokémon' entity is used to represent such a variety.
     *
     * @tags pokemon
     * @name ApiV2PokemonFormList
     * @summary List pokemon forms
     * @request GET:/api/v2/pokemon-form/
     * @secure
     */
    apiV2PokemonFormList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number
        /** The initial index from which to return the results. */
        offset?: number
        /**
         * > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
         * Case-insensitive query applied on the `name` property.
         */
        q?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<PaginatedPokemonFormSummaryList, any>({
        path: `/api/v2/pokemon-form/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Some Pokémon may appear in one of multiple, visually different forms. These differences are purely cosmetic. For variations within a Pokémon species, which do differ in more than just visuals, the 'Pokémon' entity is used to represent such a variety.
     *
     * @tags pokemon
     * @name ApiV2PokemonFormRetrieve
     * @summary Get pokemon form
     * @request GET:/api/v2/pokemon-form/{id}/
     * @secure
     */
    apiV2PokemonFormRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<PokemonFormDetail, any>({
        path: `/api/v2/pokemon-form/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Habitats are generally different terrain Pokémon can be found in but can also be areas designated for rare or legendary Pokémon.
     *
     * @tags pokemon
     * @name ApiV2PokemonHabitatList
     * @summary List pokemom habitas
     * @request GET:/api/v2/pokemon-habitat/
     * @secure
     */
    apiV2PokemonHabitatList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number
        /** The initial index from which to return the results. */
        offset?: number
        /**
         * > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
         * Case-insensitive query applied on the `name` property.
         */
        q?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<PaginatedPokemonHabitatSummaryList, any>({
        path: `/api/v2/pokemon-habitat/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Habitats are generally different terrain Pokémon can be found in but can also be areas designated for rare or legendary Pokémon.
     *
     * @tags pokemon
     * @name ApiV2PokemonHabitatRetrieve
     * @summary Get pokemom habita
     * @request GET:/api/v2/pokemon-habitat/{id}/
     * @secure
     */
    apiV2PokemonHabitatRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<PokemonHabitatDetail, any>({
        path: `/api/v2/pokemon-habitat/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Shapes used for sorting Pokémon in a Pokédex.
     *
     * @tags pokemon
     * @name ApiV2PokemonShapeList
     * @summary List pokemon shapes
     * @request GET:/api/v2/pokemon-shape/
     * @secure
     */
    apiV2PokemonShapeList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number
        /** The initial index from which to return the results. */
        offset?: number
        /**
         * > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
         * Case-insensitive query applied on the `name` property.
         */
        q?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<PaginatedPokemonShapeSummaryList, any>({
        path: `/api/v2/pokemon-shape/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Shapes used for sorting Pokémon in a Pokédex.
     *
     * @tags pokemon
     * @name ApiV2PokemonShapeRetrieve
     * @summary Get pokemon shape
     * @request GET:/api/v2/pokemon-shape/{id}/
     * @secure
     */
    apiV2PokemonShapeRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<PokemonShapeDetail, any>({
        path: `/api/v2/pokemon-shape/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description A Pokémon Species forms the basis for at least one Pokémon. Attributes of a Pokémon species are shared across all varieties of Pokémon within the species. A good example is Wormadam; Wormadam is the species which can be found in three different varieties, Wormadam-Trash, Wormadam-Sandy and Wormadam-Plant.
     *
     * @tags pokemon
     * @name ApiV2PokemonSpeciesList
     * @summary List pokemon species
     * @request GET:/api/v2/pokemon-species/
     * @secure
     */
    apiV2PokemonSpeciesList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number
        /** The initial index from which to return the results. */
        offset?: number
        /**
         * > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
         * Case-insensitive query applied on the `name` property.
         */
        q?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<PaginatedPokemonSpeciesSummaryList, any>({
        path: `/api/v2/pokemon-species/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description A Pokémon Species forms the basis for at least one Pokémon. Attributes of a Pokémon species are shared across all varieties of Pokémon within the species. A good example is Wormadam; Wormadam is the species which can be found in three different varieties, Wormadam-Trash, Wormadam-Sandy and Wormadam-Plant.
     *
     * @tags pokemon
     * @name ApiV2PokemonSpeciesRetrieve
     * @summary Get pokemon species
     * @request GET:/api/v2/pokemon-species/{id}/
     * @secure
     */
    apiV2PokemonSpeciesRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<PokemonSpeciesDetail, any>({
        path: `/api/v2/pokemon-species/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Pokeathlon Stats are different attributes of a Pokémon's performance in Pokéathlons. In Pokéathlons, competitions happen on different courses; one for each of the different Pokéathlon stats. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9athlon) for greater detail.
     *
     * @tags pokemon
     * @name ApiV2PokeathlonStatList
     * @summary List pokeathlon stats
     * @request GET:/api/v2/pokeathlon-stat/
     * @secure
     */
    apiV2PokeathlonStatList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number
        /** The initial index from which to return the results. */
        offset?: number
        /**
         * > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
         * Case-insensitive query applied on the `name` property.
         */
        q?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<PaginatedPokeathlonStatSummaryList, any>({
        path: `/api/v2/pokeathlon-stat/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Pokeathlon Stats are different attributes of a Pokémon's performance in Pokéathlons. In Pokéathlons, competitions happen on different courses; one for each of the different Pokéathlon stats. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9athlon) for greater detail.
     *
     * @tags pokemon
     * @name ApiV2PokeathlonStatRetrieve
     * @summary Get pokeathlon stat
     * @request GET:/api/v2/pokeathlon-stat/{id}/
     * @secure
     */
    apiV2PokeathlonStatRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<PokeathlonStatDetail, any>({
        path: `/api/v2/pokeathlon-stat/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description A region is an organized area of the Pokémon world. Most often, the main difference between regions is the species of Pokémon that can be encountered within them.
     *
     * @tags location
     * @name ApiV2RegionList
     * @summary List regions
     * @request GET:/api/v2/region/
     * @secure
     */
    apiV2RegionList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number
        /** The initial index from which to return the results. */
        offset?: number
        /**
         * > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
         * Case-insensitive query applied on the `name` property.
         */
        q?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<PaginatedRegionSummaryList, any>({
        path: `/api/v2/region/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description A region is an organized area of the Pokémon world. Most often, the main difference between regions is the species of Pokémon that can be encountered within them.
     *
     * @tags location
     * @name ApiV2RegionRetrieve
     * @summary Get region
     * @request GET:/api/v2/region/{id}/
     * @secure
     */
    apiV2RegionRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<RegionDetail, any>({
        path: `/api/v2/region/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Stats determine certain aspects of battles. Each Pokémon has a value for each stat which grows as they gain levels and can be altered momentarily by effects in battles.
     *
     * @tags pokemon
     * @name ApiV2StatList
     * @summary List stats
     * @request GET:/api/v2/stat/
     * @secure
     */
    apiV2StatList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number
        /** The initial index from which to return the results. */
        offset?: number
        /**
         * > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
         * Case-insensitive query applied on the `name` property.
         */
        q?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<PaginatedStatSummaryList, any>({
        path: `/api/v2/stat/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Stats determine certain aspects of battles. Each Pokémon has a value for each stat which grows as they gain levels and can be altered momentarily by effects in battles.
     *
     * @tags pokemon
     * @name ApiV2StatRetrieve
     * @summary Get stat
     * @request GET:/api/v2/stat/{id}/
     * @secure
     */
    apiV2StatRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<StatDetail, any>({
        path: `/api/v2/stat/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Super contest effects refer to the effects of moves when used in super contests.
     *
     * @tags contests
     * @name ApiV2SuperContestEffectList
     * @summary List super contest effects
     * @request GET:/api/v2/super-contest-effect/
     * @secure
     */
    apiV2SuperContestEffectList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number
        /** The initial index from which to return the results. */
        offset?: number
        /**
         * > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
         * Case-insensitive query applied on the `name` property.
         */
        q?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<PaginatedSuperContestEffectSummaryList, any>({
        path: `/api/v2/super-contest-effect/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Super contest effects refer to the effects of moves when used in super contests.
     *
     * @tags contests
     * @name ApiV2SuperContestEffectRetrieve
     * @summary Get super contest effect
     * @request GET:/api/v2/super-contest-effect/{id}/
     * @secure
     */
    apiV2SuperContestEffectRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<SuperContestEffectDetail, any>({
        path: `/api/v2/super-contest-effect/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Types are properties for Pokémon and their moves. Each type has three properties: which types of Pokémon it is super effective against, which types of Pokémon it is not very effective against, and which types of Pokémon it is completely ineffective against.
     *
     * @tags pokemon
     * @name ApiV2TypeList
     * @summary List types
     * @request GET:/api/v2/type/
     * @secure
     */
    apiV2TypeList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number
        /** The initial index from which to return the results. */
        offset?: number
        /**
         * > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
         * Case-insensitive query applied on the `name` property.
         */
        q?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<PaginatedTypeSummaryList, any>({
        path: `/api/v2/type/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Types are properties for Pokémon and their moves. Each type has three properties: which types of Pokémon it is super effective against, which types of Pokémon it is not very effective against, and which types of Pokémon it is completely ineffective against.
     *
     * @tags pokemon
     * @name ApiV2TypeRetrieve
     * @summary Get types
     * @request GET:/api/v2/type/{id}/
     * @secure
     */
    apiV2TypeRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<TypeDetail, any>({
        path: `/api/v2/type/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Versions of the games, e.g., Red, Blue or Yellow.
     *
     * @tags games
     * @name ApiV2VersionList
     * @summary List versions
     * @request GET:/api/v2/version/
     * @secure
     */
    apiV2VersionList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number
        /** The initial index from which to return the results. */
        offset?: number
        /**
         * > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
         * Case-insensitive query applied on the `name` property.
         */
        q?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<PaginatedVersionSummaryList, any>({
        path: `/api/v2/version/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Versions of the games, e.g., Red, Blue or Yellow.
     *
     * @tags games
     * @name ApiV2VersionRetrieve
     * @summary Get version
     * @request GET:/api/v2/version/{id}/
     * @secure
     */
    apiV2VersionRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<VersionDetail, any>({
        path: `/api/v2/version/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Version groups categorize highly similar versions of the games.
     *
     * @tags games
     * @name ApiV2VersionGroupList
     * @summary List version groups
     * @request GET:/api/v2/version-group/
     * @secure
     */
    apiV2VersionGroupList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number
        /** The initial index from which to return the results. */
        offset?: number
        /**
         * > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
         * Case-insensitive query applied on the `name` property.
         */
        q?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<PaginatedVersionGroupSummaryList, any>({
        path: `/api/v2/version-group/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Version groups categorize highly similar versions of the games.
     *
     * @tags games
     * @name ApiV2VersionGroupRetrieve
     * @summary Get version group
     * @request GET:/api/v2/version-group/{id}/
     * @secure
     */
    apiV2VersionGroupRetrieve: (id: string, params: RequestParams = {}) =>
      this.request<VersionGroupDetail, any>({
        path: `/api/v2/version-group/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Handles Pokemon Encounters as a sub-resource.
     *
     * @tags encounters
     * @name ApiV2PokemonEncountersRetrieve
     * @summary Get pokemon encounter
     * @request GET:/api/v2/pokemon/{pokemon_id}/encounters
     * @secure
     */
    apiV2PokemonEncountersRetrieve: (
      pokemonId: string,
      params: RequestParams = {}
    ) =>
      this.request<
        {
          location_area: {
            /** @example "cerulean-city-area" */
            name: string
            /**
             * @format uri
             * @example "https://pokeapi.co/api/v2/location-area/281/"
             */
            url: string
          }
          version_details: {
            encounter_details: {
              /** @example 100 */
              chance: number
              condition_values: {
                /** @example "story-progress-beat-red" */
                name: string
                /**
                 * @format uri
                 * @example "https://pokeapi.co/api/v2/encounter-condition-value/55/"
                 */
                url: string
              }[]
              /** @example 10 */
              max_level: number
              method: {
                /** @example "gift" */
                name: string
                /**
                 * @format uri
                 * @example "https://pokeapi.co/api/v2/encounter-method/18/"
                 */
                url: string
              }
              /** @example 10 */
              min_level: number
            }[]
            /** @example 100 */
            max_chance: number
            version: {
              /** @example "red" */
              name: string
              /**
               * @format uri
               * @example "https://pokeapi.co/api/v2/version/1/"
               */
              url: string
            }
          }[]
        }[],
        any
      >({
        path: `/api/v2/pokemon/${pokemonId}/encounters`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      })
  }
}
