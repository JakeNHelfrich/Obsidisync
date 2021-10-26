
import { App, Plugin, PluginSettingTab, Setting } from "obsidian";

export default class MyPlugin extends Plugin {
  // This field stores your plugin settings.
  setting: MyPluginSettings;

  onInit() {}

  async onload() {
    console.log("Plugin is Loading...");

  }

  onunload() {
    console.log("Plugin is Unloading...");
  }
}

/**
 * This is a data class that contains your plugin configurations. You can edit it
 * as you wish by adding fields and all the data you need.
 */
interface MyPluginSettings {
  someConfigData: number;
  anotherConfigData: string;
}

class MyPluginSettingsTab extends PluginSettingTab {
  plugin: MyPlugin;

  constructor(app: App, plugin: MyPlugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    const { containerEl } = this;
    const settings = this.plugin.setting;
    // This is just an example of a setting controll.
    new Setting(containerEl)
      .setName("Setting Name")
      .setDesc("Setting description")
      .addText((text) =>
        text.setValue(String(settings.someConfigData)).onChange((value) => {
          if (!isNaN(Number(value))) {
            settings.someConfigData = Number(value);
            this.plugin.saveData(settings);
          }
        })
      );
  }
}