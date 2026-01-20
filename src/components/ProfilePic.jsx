function ProfilePic() {
  return (
    <>
      <h2>Pievienot profila bildi</h2>
      <p>
        <h3 color="#b93455">Lietotājstāsts (User Story)</h3>
      <ul>
        <li>Kā lietotājs</li>
        <li>Es vēlos pievienot profila attēlu</li>
        <li>Lai mani varētu vieglāk atpazīt</li>
      </ul>
        <h3 color="#b93455">LabvēlīgsScenārijs</h3>
        Kad lietotājs grib augšupielādēt profila bildi (Given), Ja viņš izvēlas
        attēlu no sava datora (When), Tad attēls tiek pievienots viņa
        profilam (Then).
         <h3 color="#b93455">Nelabvēlīgs Scenārijs</h3>
        Kad lietotājs grib augšupielādēt profila bildi (Given), Ja viņš izvēlas
        attēlu no sava datora (When), Tad attēls tiek nepieņemts dēļ faila izmēra (Then).
      </p>

    </>
  );
}

export default ProfilePic;
