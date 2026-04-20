/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GoogleGenAI, Type } from "@google/genai";

let aiClient: any = null;

function getAIClient() {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("L'API Key Gemini est manquante. Vérifiez vos variables d'environnement.");
    }
    aiClient = new GoogleGenAI({ apiKey });
  }
  return aiClient;
}

export async function getPlayerScoutingReport(playerName: string, stats: any) {
  const ai = getAIClient();
  const prompt = `Génère un rapport de scouting détaillé pour le joueur suivant dans la ligue LNBH en Haïti.
  Nom: ${playerName}
  Statistiques: ${JSON.stringify(stats)}
  
  Le rapport doit inclure :
  1. Points forts
  2. Points à améliorer
  3. Potentiel international (Haut/Moyen/Bas)
  4. Projection de performance pour le prochain match.`;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      temperature: 0.7,
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          strengths: { type: Type.ARRAY, items: { type: Type.STRING } },
          weaknesses: { type: Type.ARRAY, items: { type: Type.STRING } },
          potential: { type: Type.STRING },
          prediction: { type: Type.STRING },
          scoutingNotes: { type: Type.STRING }
        },
        required: ["strengths", "weaknesses", "potential", "prediction", "scoutingNotes"]
      }
    }
  });

  return JSON.parse(response.text);
}

export async function predictMatchWinner(homeTeam: any, awayTeam: any) {
  const ai = getAIClient();
  const prompt = `Prédit le vainqueur du match :
  Équipe Domicile: ${JSON.stringify(homeTeam)}
  Équipe Extérieur: ${JSON.stringify(awayTeam)}
  
  Fournis une probabilité de victoire et une analyse tactique rapide.`;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          winner: { type: Type.STRING },
          probability: { type: Type.NUMBER },
          analysis: { type: Type.STRING }
        },
        required: ["winner", "probability", "analysis"]
      }
    }
  });

  return JSON.parse(response.text);
}
