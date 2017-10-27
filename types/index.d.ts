import { PluginFunction } from 'vue';

declare namespace VED {
  interface IVEDOptions = {
    events?: string[];
  }

  export const plugin: PluginFunction<IVEDOptions>;
}

export default VED.plugin;
