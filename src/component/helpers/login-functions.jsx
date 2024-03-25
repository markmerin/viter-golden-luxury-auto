import { devNavUrl } from "./functions-general";

export const checkRoleToRedirect = (navigate, data) => {
  data.role_is_developer === 1
    ? navigate(`${devNavUrl}/${data.role_name.toLowerCase()}/settings/user`)
    : data.role_is_admin === 1
    ? navigate(`${devNavUrl}/${data.role_name.toLowerCase()}/settings/user`)
    : navigate(`${devNavUrl}/${data.role_name.toLowerCase()}/settings/user`);
};
