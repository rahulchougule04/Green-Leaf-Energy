import fs from 'fs';
import path from 'path';

const aliases = {
  '@project-images': 'C:/Users/HP/.gemini/antigravity/brain/6034ce83-f3b1-4746-b1a6-bf72d193f77a',
  '@generated-images': 'C:/Users/HP/.gemini/antigravity/brain/a0b5f395-12df-445f-9f12-1465f88cf839',
  '@past-images': 'C:/Users/HP/.gemini/antigravity/brain/1b1cbc92-0472-4118-a0d1-1d5f2915d2da',
  '@current-images': 'C:/Users/HP/.gemini/antigravity/brain/8759d260-aaef-4103-97eb-130f32267209'
};

const imagesToCopy = [
  { source: '@project-images/solar_final_install_1790073614019.jpg', dest: 'solar_final_install_1790073614019.jpg' },
  { source: '@project-images/solar_structure_1790073663901.jpg', dest: 'solar_structure_1790073663901.jpg' },
  { source: '@project-images/solar_panels_1790073747461.jpg', dest: 'solar_panels_1790073747461.jpg' },
  { source: '@project-images/solar_inverter_1790073831459.jpg', dest: 'solar_inverter_1790073831459.jpg' },
  { source: '@project-images/solar_acdc_db_1790073926213.jpg', dest: 'solar_acdc_db_1790073926213.jpg' },
  { source: '@project-images/solar_before_site_1790074014463.jpg', dest: 'solar_before_site_1790074014463.jpg' },
  { source: '@project-images/solar_industrial_1790074102295.jpg', dest: 'solar_industrial_1790074102295.jpg' },
  
  { source: '@generated-images/commercial_solar_project_1790136967613.jpg', dest: 'commercial_solar_project_1790136967613.jpg' },
  { source: '@generated-images/commercial_before_roof_1790137664276.jpg', dest: 'commercial_before_roof_1790137664276.jpg' },
  { source: '@generated-images/commercial_pergola_structure_1790137333146.jpg', dest: 'commercial_pergola_structure_1790137333146.jpg' },
  { source: '@generated-images/commercial_inverter_standalone_1790138020137.jpg', dest: 'commercial_inverter_standalone_1790138020137.jpg' },
  { source: '@generated-images/commercial_acdc_db_close_1790137990843.jpg', dest: 'commercial_acdc_db_close_1790137990843.jpg' },
  { source: '@generated-images/commercial_inverter_room_1790137715573.jpg', dest: 'commercial_inverter_room_1790137715573.jpg' },
  { source: '@past-images/commercial_solar_plant_1788601572927.jpg', dest: 'commercial_solar_plant_1788601572927.jpg' },
  { source: '@past-images/hero_solar_rooftop_1788601548987.jpg', dest: 'hero_solar_rooftop_1788601548987.jpg' },
  
  { source: '@generated-images/res_3kw_solar_1790137204052.jpg', dest: 'res_3kw_solar_1790137204052.jpg' },
  { source: '@generated-images/res_3kw_structure_1790137743527.jpg', dest: 'res_3kw_structure_1790137743527.jpg' },
  { source: '@current-images/res_before_install_1790144403801.jpg', dest: 'res_before_install_1790144403801.jpg' },
  { source: '@past-images/solar_engineer_inspection_1788601593055.jpg', dest: 'solar_engineer_inspection_1788601593055.jpg' },
  
  { source: '@current-images/solar_capacity_calc_1790145101481.jpg', dest: 'solar_capacity_calc_1790145101481.jpg' },
  { source: '@current-images/solar_net_meter_1790145131127.jpg', dest: 'solar_net_meter_1790145131127.jpg' },
  { source: '@current-images/solar_panel_cleaning_1790145162810.jpg', dest: 'solar_panel_cleaning_1790145162810.jpg' },
  { source: '@current-images/solar_warranty_quality_1790145212155.jpg', dest: 'solar_warranty_quality_1790145212155.jpg' },
  
  { source: '@generated-images/industrial_50kw_solar_1790137310760.jpg', dest: 'industrial_50kw_solar_1790137310760.jpg' },
  { source: '@generated-images/industrial_before_shed_1790137605262.jpg', dest: 'industrial_before_shed_1790137605262.jpg' },
  { source: '@generated-images/industrial_rail_structure_1790137635011.jpg', dest: 'industrial_rail_structure_1790137635011.jpg' },
  { source: '@generated-images/industrial_inverter_panel_1790137363876.jpg', dest: 'industrial_inverter_panel_1790137363876.jpg' },
  { source: '@generated-images/industrial_acdc_lt_panel_1790138240271.jpg', dest: 'industrial_acdc_lt_panel_1790138240271.jpg' }
];

const publicProjectsDir = path.join('c:/Users/HP/OneDrive/Desktop/New folder/solar/public/projects');

if (!fs.existsSync(publicProjectsDir)) {
  fs.mkdirSync(publicProjectsDir, { recursive: true });
}

imagesToCopy.forEach(img => {
  const alias = Object.keys(aliases).find(a => img.source.startsWith(a));
  if (alias) {
    const srcPath = path.join(aliases[alias], img.source.replace(alias + '/', ''));
    const destPath = path.join(publicProjectsDir, img.dest);
    try {
      if (fs.existsSync(srcPath)) {
        fs.copyFileSync(srcPath, destPath);
        console.log('Copied:', img.dest);
      } else {
        console.log('NOT FOUND:', srcPath);
      }
    } catch (e) {
      console.error('Failed to copy', srcPath, e);
    }
  }
});
