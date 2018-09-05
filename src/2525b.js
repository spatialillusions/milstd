import tsv2json from "./tsv2json.js";

import mil_std_2525b_space from "./../tsv-tables/2525b-change2/space.tsv";
import mil_std_2525b_air from "./../tsv-tables/2525b-change2/air.tsv";
import mil_std_2525b_ground from "./../tsv-tables/2525b-change2/ground.tsv";
import mil_std_2525b_sea_surface from "./../tsv-tables/2525b-change2/sea-surface.tsv";
import mil_std_2525b_sub_surface from "./../tsv-tables/2525b-change2/sub-surface.tsv";
import mil_std_2525b_sof from "./../tsv-tables/2525b-change2/sof.tsv";

import mil_std_2525b_tactical_graphics from "./../tsv-tables/2525b-change2/tactical-graphics.tsv";
import mil_std_2525b_signals_intelligence from "./../tsv-tables/2525b-change2/signals-intelligence.tsv";
import mil_std_2525b_mootw from "./../tsv-tables/2525b-change2/mootw.tsv";

export default {
  WAR: {
    SPC: {
      name: "SPACE",
      "main icon": tsv2json(mil_std_2525b_space)
    },
    AIRTRK: {
      name: "AIR",
      "main icon": tsv2json(mil_std_2525b_air)
    },
    GRDTRK: {
      name: "GROUND",
      "main icon": tsv2json(mil_std_2525b_ground)
    },
    SSUF: {
      name: "SEA SURFACE",
      "main icon": tsv2json(mil_std_2525b_sea_surface)
    },
    SBSUF: {
      name: "SUBSURFACE",
      "main icon": tsv2json(mil_std_2525b_sub_surface)
    },
    SOFUNT: {
      name: "SPECIAL OPERATIONS FORCES (SOF)",
      "main icon": tsv2json(mil_std_2525b_sof)
    }
  },
  TACGRP: {
    name: "TACTICAL GRAPHICS",
    "main icon": tsv2json(mil_std_2525b_tactical_graphics)
  },
  SIGINT: {
    name: "SIGNALS INTELLIGENCE",
    "main icon": tsv2json(mil_std_2525b_signals_intelligence)
  },
  MOOTW: {
    name: "MILITARY OPERATIONS OTHER THAN WAR (MOOTW)",
    "main icon": tsv2json(mil_std_2525b_mootw)
  }
};
