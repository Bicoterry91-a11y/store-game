import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const payload=await req.json();
    // IMPORTANT: en production, valider ici la signature/secret fourni par PayFusion
    // selon la documentation de votre compte marchand.
    const reference=payload.reference;
    const status=String(payload.status||"").toLowerCase();
    if(!reference) return NextResponse.json({ok:false},{status:400});

    const paid=["paid","success","successful","completed"].includes(status);
    await prisma.order.updateMany({
      where:{paymentReference:reference},
      data:{paymentStatus:paid?"paid":"failed",status:paid?"paid":"payment_failed"}
    });
    return NextResponse.json({ok:true});
  } catch {
    return NextResponse.json({ok:false},{status:500});
  }
}
