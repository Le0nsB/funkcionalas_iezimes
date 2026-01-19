function TranslationRow({ en, lv }) {
  const isKeyword = lv.startsWith("*");

  return (
    <tr>
      <td>{en}</td>
      <td style={{ color: isKeyword ? "#0066cc" : "inherit" }}>
        {lv}
      </td>
    </tr>
  );
}

export default TranslationRow;
