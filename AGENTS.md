# Translation terminology

- Always translate Ukrainian «Дике Поле» (including inflected forms such as «Дикого Поля») as **Loca Deserta**. Do not use “Wild Field” or “Wild Fields”.
- Keep «Дике Поле» in Ukrainian text. Use **Loca Deserta** consistently in translated UI, prose, titles, metadata, and structured data, including **Loca Deserta-17** for «Дике Поле-17».
- Edit the source generators in `scripts/` and run `npm run build` to update generated pages and SEO files.

## Sounds: reuse from the shared Sound Library first

All audio for the owner's games (SFX, UI, ambience, music, stingers, voice) lives in one library on the
Synology NAS: `~/SynologyDrive/GameDevFiles/SoundLibrary`. It is the source of truth; read its `README.md`.

- **Before adding any sound, search the library**, e.g.
  `python3 ~/SynologyDrive/GameDevFiles/SoundLibrary/tools/find_sound.py sword clash`
  (filters: `--cat hurt_death`, `--max-dur 2`, `--loop`, `--own`, `--lang uk`, `--voice`; `--list-categories`).
  If something fits (death, hit, clash, footsteps, UI click, music...), copy it into this repo's assets, master it the
  way this repo does, and record the reuse with `tools/add_sound.py <file> --game <repo> ...`.
- **If nothing fits, do not generate it yourself.** Tell the owner which sounds are missing, each with a description,
  a ready ElevenLabs prompt, duration, loop flag and variant count (style and params: the library's `GENERATORS.md`).
  The owner generates them.
- **Every new sound that lands in this repo is added to the library in the same task** with
  `python3 ~/SynologyDrive/GameDevFiles/SoundLibrary/tools/add_sound.py` (desc, tags, exact prompt, generator, licence).
