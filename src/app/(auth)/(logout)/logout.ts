"use server";

import { signOut } from "../../../../auth";

export default async function logoutAction(
  _prevState: any,
  formData: FormData
) {
  await signOut();
}
