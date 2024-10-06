dfx deploy token --argument '
  (variant {
    Init = record {
      token_name = "Token E";
      token_symbol = "E";
      minting_account = record {
        owner = principal "nu4ce-6r22f-2x4c3-byypo-ltk2h-rpoks-qd3hw-w22d6-n6adq-iwahh-jae";
      };
      initial_balances = vec {
        record {
          record {
            owner = principal "nu4ce-6r22f-2x4c3-byypo-ltk2h-rpoks-qd3hw-w22d6-n6adq-iwahh-jae";
          };
          1_000_000_000_000_000_000;
        };
      };
      metadata = vec {};
      transfer_fee = 10_000;
      archive_options = record {
        trigger_threshold = 2000;
        num_blocks_to_archive = 1000;
        controller_id = principal "nu4ce-6r22f-2x4c3-byypo-ltk2h-rpoks-qd3hw-w22d6-n6adq-iwahh-jae";
      };
      feature_flags = opt record {
        icrc2 = true;
      };
    }
  })
'


dfx canister call token icrc1_transfer "(record { 
  to = record { 
    owner = principal \"7km4a-3mivz-sugwg-naxhb-uc4fl-7nrqt-ibcsv-lbepu-v7tqu-33mup-fqe\";
  }; 
  amount = 10_000_000_000_000;
})"


dfx canister call token icrc2_approve "(record { 
  amount = 1_000_010_000; 
  spender = record { 
    owner = principal \"nlwxt-arya3-k3zf3-2mr2w-cev5a-lftm2-22vtw-6velq-muscg-b34ej-pqe\";
  }; 
})"

dfx canister call token icrc2_transfer_from "(record { 
  amount = 1_000_000_000; 
  from = record { 
    owner = principal \"r52up-53nzf-qabm7-umbpm-mma4z-alcym-ngag4-de5j5-yx6xt-azgsp-lae\";
  }; 
  to = record { 
    owner = principal \"nlwxt-arya3-k3zf3-2mr2w-cev5a-lftm2-22vtw-6velq-muscg-b34ej-pqe\";
  }; 
})"

Demo = r52up-53nzf-qabm7-umbpm-mma4z-alcym-ngag4-de5j5-yx6xt-azgsp-lae
Default = aokql-627cq-e54sj-hq3k5-6wway-pfgx7-6fcxq-7zsmx-j3rq6-32hpa-5qe
Firstid = nu4ce-6r22f-2x4c3-byypo-ltk2h-rpoks-qd3hw-w22d6-n6adq-iwahh-jae
Minter = nlwxt-arya3-k3zf3-2mr2w-cev5a-lftm2-22vtw-6velq-muscg-b34ej-pqe
