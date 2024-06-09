{
  description = "Work Experience Tracker Application Monorepo";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-parts.url = "github:hercules-ci/flake-parts";
    systems = {
      url = "github:nix-systems/default";
      flake = false;
    };
  };

  outputs = inputs@{ flake-parts, ... }:
    flake-parts.lib.mkFlake { inherit inputs; } {
      imports = [ ];
      systems = import inputs.systems;

      perSystem =
        { config
        , self'
        , inputs'
        , pkgs
        , system
        , ...
        }:
        let
          pkgs = import inputs.nixpkgs { inherit system; config.allowUnfree = true; };

          buildDeps = with pkgs; [
            git
            bun
            nodejs
            react-native-debugger
            typescript
            watchman
            openssl
            sqlite
            android-studio
            android-tools
            prisma-engines
            nodePackages.prisma
            nodePackages.typescript-language-server
          ];

          mkDevShell = pkgs.mkShell {
            LD_LIBRARY_PATH = "${pkgs.lib.makeLibraryPath buildDeps}";
            shellHook = ''
              export PRISMA_QUERY_ENGINE_LIBRARY=${pkgs.prisma-engines}/lib/libquery_engine.node
              export PRISMA_QUERY_ENGINE_BINARY=${pkgs.prisma-engines}/bin/query-engine
              export PRISMA_SCHEMA_ENGINE_BINARY=${pkgs.prisma-engines}/bin/schema-engine
              export ANDROID_HOME=$HOME/Android/Sdk
              export PATH=$PATH:$ANDROID_HOME/emulator
              export PATH=$PATH:$ANDROID_HOME/platform-tools
            '';
            packages = buildDeps;
          };
        in
        {
          devShells.default = mkDevShell;
          # packages.default = mkAndroidApp + mkIOSApp + mkWebApp;
          # apps.default = {
          #   type = "app";
          #   program = self'.packages.default;
          # };
        };
    };
}
