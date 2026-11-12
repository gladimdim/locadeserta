#!/usr/bin/env python3
"""Build the silent homepage collage from the SynologyDrive trailer library.

Usage: python3 scripts/build-backdrop.py /path/to/SynologyDrive/GameDevFiles
Requires ffmpeg. Normal site builds use the checked-in outputs.
"""
import argparse
from pathlib import Path
import subprocess
import tempfile

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('source_root', type=Path)
args = parser.parse_args()
output = Path(__file__).resolve().parents[1] / 'assets' / 'video'
output.mkdir(parents=True, exist_ok=True)

# Each quadrant has two eight-second scenes. Crop trailer captions and HUD edges.
scenes = [
    [('sicha/video/trailer/gameplay/trailer.mp4', 9),
     ('sicha/video/trailer/gameplay/trailer.mp4', 31)],
    [('defendus/video/trailer/defendus_trailer_en.mp4', 8),
     ('defendus/video/trailer/defendus_trailer_en.mp4', 25)],
    [('Odesa/video_clips/produce_iron_ore.mp4', 22),
     ('valka/video/trailer/valka_trailer_en.mp4', 16)],
    [('LD_Settlers/Studio/footage/launch-battle-wide.mp4', 18),
     ('LD_Settlers/Studio/footage/launch-colony.mp4', 5)],
]

def ffmpeg(*args):
    subprocess.run(['ffmpeg', '-hide_banner', '-loglevel', 'error', '-y', *args], check=True)

with tempfile.TemporaryDirectory(prefix='locadeserta-backdrop-') as temp:
    inputs = []
    for quadrant, clips in enumerate(scenes):
        for scene, (relative, start) in enumerate(clips):
            path = Path(temp) / f'{quadrant}-{scene}.mp4'
            ffmpeg('-ss', str(start), '-i', str(args.source_root / relative),
                   '-t', '8', '-an', '-vf',
                   'crop=iw:ih*0.68:0:ih*0.12,scale=640:360:force_original_aspect_ratio=increase,crop=640:360,setsar=1,fps=24',
                   '-c:v', 'libx264', '-threads', '2', '-preset', 'fast', '-crf', '24',
                   '-pix_fmt', 'yuv420p', str(path))
            inputs.extend(['-i', str(path)])
    filters = ';'.join(f'[{i*2}:v][{i*2+1}:v]concat=n=2:v=1:a=0[q{i}]' for i in range(4))
    filters += ';[q0][q1][q2][q3]xstack=inputs=4:layout=0_0|640_0|0_360|640_360,drawgrid=w=640:h=360:t=4:c=0x0a0d14[v]'
    ffmpeg(*inputs, '-filter_complex', filters, '-map', '[v]', '-an',
           '-c:v', 'libx264', '-threads', '2', '-preset', 'slow', '-crf', '27',
           '-maxrate', '1600k', '-bufsize', '3200k', '-pix_fmt', 'yuv420p',
           '-movflags', '+faststart', str(output / 'universe-collage.mp4'))
    ffmpeg('-ss', '2', '-i', str(output / 'universe-collage.mp4'),
           '-frames:v', '1', '-q:v', '3', str(output / 'universe-collage.jpg'))

print(f'Created {output / "universe-collage.mp4"}')
