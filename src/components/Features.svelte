<script>

</script>

<div class="container xl">
    <div class="grid">
        <div class="card layered-shadow">
                <h2>Private Messages</h2>
                <p>Every message is encrypted with leading asymmetric encryption, specifically NaCl. Read more about the encryption <a style={{color: "#fff"}} href="https://nacl.cr.yp.to/">here</a>. </p>
        </div>
        <div class="card layered-shadow">
                <h2> Voice & Video</h2>
                <p>Communicate with voice & video without the use of any intermediate server that process your data. Data is passed directly between peers. </p>
        </div>
        <div class="card layered-shadow">
                <h2>Unlimited Sharing</h2>
                <p>Share without looking at the file size. This feature is powered by Bittorrent technology, which is the leading peer-to-peer file sharing protocol</p>
        </div>
        <div class="card layered-shadow">
                <h2>Social Network</h2>
                <p>Hugin Boards, the next step in the evolution of social media. Instead of likes, you have tips, instead of censorship, you have freedom of speech!</p>
        </div>
        <div class="card layered-shadow">
                <h2>Ungovernable</h2>
                <p>Hugin cannot be taken down or be censored, and most importantly Hugin does not function without you! </p>
        </div>
        <div class="card layered-shadow">
                <h2>Open-source</h2>
                <p>Our source code is open for everyone to view and our community is open for anyone interested in contributing. </p>
        </div>
    </div>
</div>

<style lang="scss">

    .grid {
      display: grid;
      grid-template-columns: repeat(12, minmax(0, 1fr));
      grid-gap: 1rem;
    }

    .xl {
      max-width: 1400px;
      margin-bottom: 2rem;
    }

    .card {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      padding: 1.5rem;
      grid-column: span 4 / span 4;
      min-height: 180px;
      border: 1px solid var(--card-border);
      background-color: var(--card-background);
      border-radius: 10px;
      text-decoration: none;
      transition: 100ms ease-in-out;

      a {
        color: white;
      }


      @media screen and (max-width: 1200px) {
        grid-column: span 6 / span 6;
      }

      @media screen and (max-width: 568px) {
        grid-column: span 12 / span 12;
      }

      p {
        opacity: 60%;
      }
    }

</style>